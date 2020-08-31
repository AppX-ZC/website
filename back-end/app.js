const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const formRouter = require('./routes/formRouter');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');

const contactUs = require('./controllers/contactController');
const globalErrorHandler = require('./controllers/errorController');
const authController = require('./controllers/authController');

const app = express();

app.use(helmet());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//Data Santization against NoSQL query injection
app.use(mongoSanitize());

//Data Santization against cross-site scripting XSS attacks
app.use(xss());

app.use(express.json());

app.post('/login', authController.login);
app.get('/logout', authController.logout);

app.post('/contact-us', contactUs);
app.use('/form', formRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

app.use(globalErrorHandler);
module.exports = app;

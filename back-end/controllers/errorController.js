const AppError = require('./../utils/appError');

const handelJWTErr = () =>
  new AppError('Invalid Token, Please log in again', 401);

const handleValidationErrDB = err => {
  const errorsArr = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data: ${errorsArr.join('. ')}`;
  return new AppError(message, 400);
};

const handleDuplicatedFields = err => {
  const value = Object.entries(err.keyValue)
    .map(([key, val]) => `${key}: ${val}`)
    .join(' ');
  const message = `Duplicate field: ${value} Please use another value`;
  return new AppError(message, 400);
};

const sendDevErrs = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendProdErrs = (err, res) => {
  if (err.isOperational) {
    // console.log('Operational');
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    // console.log('Not Operational');
    res.status(500).json({
      status: 'error',
      message: 'something went wrong'
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') sendDevErrs(err, res);
  else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    if (err.name === 'ValidationError') error = handleValidationErrDB(error);
    if (err.name === 'MongoError' && err.code === 11000)
      error = handleDuplicatedFields(error);
    if (err.name === 'TokenExpiredError') {
      console.log('token err');
      error = handelJWTErr();
    }

    sendProdErrs(error, res);
  }
};

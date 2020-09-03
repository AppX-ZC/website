const express = require('express');
const hackathonUserController = require('../controllers/hackathonUserController');
const summitUserController = require('../controllers/summitUserController');
const { protect } = require('./../controllers/authController');

const router = express.Router();

router.use(protect);

router
  .route('/hackathon/')
  .get(hackathonUserController.getAllUsers)
  .post(hackathonUserController.createUser);

router
  .route('/hackathon/:id')
  .get(hackathonUserController.getUser)
  .patch(hackathonUserController.updateUser)
  .delete(hackathonUserController.deleteUser);

router
  .route('/summit/')
  .get(summitUserController.getAllUsers)
  .post(summitUserController.createUser);

router
  .route('/summit/:id')
  .get(summitUserController.getUser)
  .patch(summitUserController.updateUser)
  .delete(summitUserController.deleteUser);

module.exports = router;

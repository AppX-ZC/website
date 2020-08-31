const express = require('express');
const hackathonformController = require('../controllers/hackathonformController');
const summitformController = require('../controllers/summitformController');

const router = express.Router();

router.route('/hackathon').post(hackathonformController.register);
router.route('/summit').post(summitformController.register);

module.exports = router;

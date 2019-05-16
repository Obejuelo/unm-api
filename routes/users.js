const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.route('/users')
  .post(userController.create)

module.exports = router;
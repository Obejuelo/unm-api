const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.route('/api/users')
  .post(userController.create)

module.exports = router;
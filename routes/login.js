const express = require('express');
const router = express.Router();

const loginControll = require('../controllers/login.controller');

router.route('/api/login')
    .post(loginControll.login)

module.exports = router;
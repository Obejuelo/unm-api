const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/session.controller');

router.route('/api/session')
    .post(sessionController.session)

module.exports = router;
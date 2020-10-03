const express = require('express');

const router = express.Router();

const SessionControler = require('../controllers/SessionController');

router.post('/sessions', SessionControler.store);

module.exports = router;

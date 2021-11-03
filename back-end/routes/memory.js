const express = require('express');
const router = express.Router();
const memoryControl = require('../controllers/memory');

// route d'inscription
router.post('/test', memoryControl.signup);

module.exports = router;
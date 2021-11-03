const express = require('express');
const router = express.Router();
const usersControl = require('../controllers/users');

// route d'inscription
router.post('/inscription', usersControl.signup);

module.exports = router;

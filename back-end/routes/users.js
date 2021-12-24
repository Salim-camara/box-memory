const express = require('express');
const router = express.Router();
const usersControl = require('../controllers/users');

// route d'inscription
router.post('/inscription', usersControl.signup);
// route de connexion
router.post('/connexion', usersControl.signin);
router.get('/connexion', usersControl.getTestHeroku);

module.exports = router;

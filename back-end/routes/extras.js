const express = require('express');
const router = express.Router();
const extrasController = require('../controllers/extras');
const auth = require('../middleware/auth');

router.get('/extras_accueil', auth, extrasController.getAccueil);
router.get('/extras_check', auth, extrasController.getState);


module.exports = router;
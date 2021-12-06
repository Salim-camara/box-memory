const express = require('express');
const router = express.Router();
const memoryControl = require('../controllers/memory');

// route d'inscription
router.post('/memories', memoryControl.signup);
// route get
router.get('/memories', memoryControl.getAll)

module.exports = router;
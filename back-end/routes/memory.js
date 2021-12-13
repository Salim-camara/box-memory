const express = require('express');
const router = express.Router();
const memoryControl = require('../controllers/memory');
const auth = require('../middleware/auth');

// route d'inscription
router.post('/memories', auth, memoryControl.signup);
// route get
router.get('/memories_weeks', auth, memoryControl.getAllWeeks);
router.post('/memories_week', memoryControl.getWeek);


module.exports = router;
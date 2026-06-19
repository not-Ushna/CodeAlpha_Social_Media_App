const express = require('express');
const router = express.Router();
const { follow, unfollow } = require('../controllers/followController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/follow', authMiddleware, follow);
router.post('/unfollow', authMiddleware, unfollow);

module.exports = router;

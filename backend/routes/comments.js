const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, commentsController.create);
router.delete('/:id', authMiddleware, commentsController.remove);

module.exports = router;

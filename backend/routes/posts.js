const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', postsController.list);
router.get('/:id', postsController.get);
router.post('/', authMiddleware, postsController.create);
router.put('/:id', authMiddleware, postsController.update);
router.delete('/:id', authMiddleware, postsController.remove);
router.post('/:id/like', authMiddleware, postsController.toggleLike);

module.exports = router;

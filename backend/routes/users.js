const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', usersController.list);
router.get('/:id', usersController.get);
router.put('/:id', authMiddleware, usersController.update);

module.exports = router;

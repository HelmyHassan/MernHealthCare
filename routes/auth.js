const express = require('express');
const { login, getMe } = require('../controllers/auth');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;

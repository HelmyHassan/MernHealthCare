const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const User = require('../models/User');
// Include other resource routers
const childrenRouter = require('./children');

const router = express.Router({ mergeParams: true });

// Re-route into other resource routers
router.use('/:userId/children', childrenRouter);

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(User, 'children'), getUsers)
  .post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;

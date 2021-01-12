const express = require('express');
const {
  getChildren,
  getChild,
  getChildrenUser,
  updateChildren,
  addChildren,
  deleteOneChildren,
  deleteChildren,
  addVaccination,
  removeVaccination,
} = require('../controllers/children');

const Children = require('../models/Children');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Children, {
      path: 'user',
      select: 'name phone',
    }),

    getChildren
  )
  .post(addChildren)
  .put(addVaccination)
  .delete(deleteChildren);

router.route('/me').get(
  advancedResults(Children, {
    path: 'user',
    select: 'name phone',
  }),

  getChildrenUser
);
router.route('/remove').put(removeVaccination);
router
  .route('/:id')
  .get(getChild)
  .put(updateChildren)
  .delete(deleteOneChildren);

module.exports = router;

const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const Children = require('../models/Children');

// functionaltiy for admin

// @desc      Get all Children || children for one user
// @route     GET /api/v1/children
// @route     GET /api/v1/users/:userID/children
// @access    Public
exports.getChildren = asyncHandler(async (req, res, next) => {
  if (req.params.userId) {
    const children = await Children.find({ user: req.params.userId });

    return res.status(200).json({
      success: true,
      count: children.length,
      data: children,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single child by id
// @route     GET /api/v1/auth/children/:id
// @access    Private/Admin
exports.getChild = asyncHandler(async (req, res, next) => {
  const child = await Children.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: child,
  });
});

// @desc      Add children
// @route     POST /api/v1/auth/users/:userId/children
// @access    Private
exports.addChildren = asyncHandler(async (req, res, next) => {
  req.body.user = req.params.userId;

  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.userId}`),
      404
    );
  }

  const children = await Children.create(req.body);

  res.status(200).json({
    success: true,
    data: children,
  });
});

// @desc      Update specific Children
// @route     GET /api/v1/children/:id
// @access    Public
exports.updateChildren = asyncHandler(async (req, res, next) => {
  let children = await Children.findById(req.params.id);

  if (!children) {
    return next(
      new ErrorResponse(`No Children with the id of ${req.params.id}`),
      404
    );
  }
  children = await Children.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: children,
  });
});

// @desc      Delete children for user
// @route     DELETE /api/v1/auth/users/:userId/children
// @access    Private
exports.deleteChildren = asyncHandler(async (req, res, next) => {
  req.body.user = req.params.userId;

  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.userId}`),
      404
    );
  }

  await Children.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Delete one children for speciefic user
// @route     DELETE /api/v1/auth/users/:userId/children/:id
// @access    Private
exports.deleteOneChildren = asyncHandler(async (req, res, next) => {
  req.body.user = req.params.userId;

  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.userId}`),
      404
    );
  }

  await Children.findOneAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});

//For user login

// @desc      Get children for single user
// @route     GET /api/v1/children/me
// @access    Private
exports.getChildrenUser = asyncHandler(async (req, res, next) => {
  const children = await Children.find({
    user: req.user.id,
  });

  if (!children) {
    next(new ErrorResponse(`There is no children for this user `, 404));
  }

  res.json({
    success: true,
    data: children,
  });
});

// For Vaccination Functionalty

// @desc      Update Vaccination for all Children
// @route     GET /api/v1/children
// @access    Private
// exports.updateVaccination = asyncHandler(async (req, res, next) => {
//   let children = await Children.findById(req.params.id);

//   if (!children) {
//     return next(
//       new ErrorResponse(`No Children with the id of ${req.params.id}`),
//       404
//     );
//   }
//   children = await Children.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   });

//   res.status(200).json({
//     success: true,
//     data: children
//   });
// });

// ------------------------------  Vaccination ----------------------------------------

// @desc      Add Vaccination for all Children
// @route     put /api/v1/children
// @access    Private
exports.addVaccination = asyncHandler(async (req, res, next) => {
  const vaccination = await Children.updateMany(
    {},
    { $push: { vaccination: req.body } }
  );
  res.json({
    success: true,
    data: vaccination,
  });
});

// @desc      Remove Vaccination for all Children
// @route     put /api/v1/children/remove
// @access    Private
exports.removeVaccination = asyncHandler(async (req, res, next) => {
  const vaccination = await Children.updateMany(
    { vaccination: req.body },
    { $pull: { vaccination: req.body } }
  );
  console.log(req.body);
  res.json({
    success: true,
    data: vaccination,
  });
});

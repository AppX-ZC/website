const Post = require('./../models/postModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find();

  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts
    }
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post)
    return next(
      new AppError(`There is no post with this id ${req.params.id}`),
      404
    );

  res.status(200).json({
    status: 'success',
    data: {
      post
    }
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const newPost = await Post.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      post: newPost
    }
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  const patchedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true
  });

  if (!patchedPost)
    return next(
      new AppError(`There is no post with this id ${req.params.id}`),
      404
    );

  res.status(200).json({
    status: 'success',
    data: {
      post: patchedPost
    }
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      post: null
    }
  });
});

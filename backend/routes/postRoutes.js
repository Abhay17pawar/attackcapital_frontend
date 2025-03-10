const express = require('express');
const { createPost, getAllPosts, getPostsByAuthor } = require('../controller/postController');
const authenticate = require('../middleware/authMiddleware'); 

const router = express.Router();

// POST route for creating a new post
router.post('/posts', authenticate, createPost);

// GET route for retrieving all posts
router.get('/', getAllPosts);

// GET route for retrieving posts by a specific author
router.get('/posts/author/:authorId', getPostsByAuthor);

module.exports = router;

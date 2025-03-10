const Post =  require('../models/post.js');
const { verifyToken } = require('../utils/auth.js');

// Utility function to handle errors
const handleError = (res, error, message = 'Something went wrong') => {
  console.error(error);
  return res.status(500).json({ message, error: error.message });
};

// POST: Create a new post (Requires authentication)
export const createPost = async (req, res) => {
  const { title, content } = req.body;

  // Input validation
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  // Verify the JWT token to ensure the user is authenticated
  const token = req.headers.authorization?.split(' ')[1]; // Assuming token is passed in Authorization header as Bearer token

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = await verifyToken(token); // Assuming verifyToken decodes the JWT and returns user info

    // Create a new post using the logged-in user's ID
    const newPost = new Post({
      title,
      content,
      authorId: decoded.userId, // The userId from the decoded JWT token
    });

    await newPost.save();
    return res.status(201).json(newPost); // Return the newly created post
  } catch (error) {
    return handleError(res, error, 'Failed to create post');
  }
};

// GET: Retrieve all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('authorId', 'name email') // Populate author details
      .sort({ createdAt: -1 }); // Sort posts by creation date, most recent first
    return res.status(200).json(posts);
  } catch (error) {
    return handleError(res, error, 'Failed to retrieve posts');
  }
};

// GET: Retrieve posts by a specific author
export const getPostsByAuthor = async (req, res) => {
  const { authorId } = req.params; // Get the author's ID from the params (authorId in the URL)

  // Input validation
  if (!authorId) {
    return res.status(400).json({ message: 'Author ID is required' });
  }

  try {
    const posts = await Post.find({ authorId })
      .populate('authorId', 'name email') // Populate author details
      .sort({ createdAt: -1 }); // Sort posts by creation date, most recent first
    return res.status(200).json(posts);
  } catch (error) {
    return handleError(res, error, 'Failed to retrieve posts by author');
  }
};

// GET: Retrieve posts by a specific author (Query parameter example)
export const getPostsByAuthorQuery = async (req, res) => {
  const { author } = req.query; // Get the author's ID from the query params

  if (!author) {
    return res.status(400).json({ message: 'Author ID is required' });
  }

  try {
    const posts = await Post.find({ authorId: author })
      .populate('authorId', 'name email') // Populate author details
      .sort({ createdAt: -1 }); // Sort posts by creation date, most recent first
    return res.status(200).json(posts);
  } catch (error) {
    return handleError(res, error, 'Failed to retrieve posts by author');
  }
};

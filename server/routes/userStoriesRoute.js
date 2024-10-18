const express = require('express');
const router = express.Router();
const userStoriesController = require('../controllers/userStoriesController');

// CRUD routes for users
router.get('/userstories', userStoriesController.getUserStories);          // Get all users
// router.get('/:id', userController.getUserById);       // Get user by ID
router.post('/userstories', userStoriesController.addUserStory);             // Add new user
router.put('/userstories/:id', userStoriesController.updateUserStory);        // Update user by ID
router.delete('/userstories/:id', userStoriesController.deleteUserStory);     // Remove user by ID
// router.delete('/', userController.deleteAllUsers);    // Remove all users

module.exports = router;

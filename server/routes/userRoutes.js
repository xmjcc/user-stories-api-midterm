const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD routes for users
router.get('/', userController.getAllUsers);          // Get all users
router.get('/:id', userController.getUserById);       // Get user by ID
router.post('/', userController.addUser);             // Add new user
router.put('/:id', userController.updateUser);        // Update user by ID
router.delete('/:id', userController.deleteUser);     // Remove user by ID
router.delete('/', userController.deleteAllUsers);    // Remove all users

module.exports = router;

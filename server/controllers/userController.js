const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET contact by ID



exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new user
exports.addUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created: Date.now(),
        updated: Date.now(),
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        user.updated = Date.now();

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const userContact = await User.findByIdAndDelete(req.params.id);
        if (userContact) {
            res.status(200).json({ message: 'Contact deleted' });
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all users
exports.deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany();
        res.json({ message: 'All users removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

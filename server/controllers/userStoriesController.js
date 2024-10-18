const UserStory = require('../models/UserStoryModel');

// Get all users
exports.getUserStories = async (req, res) => {
    try {

        const { category } = req.query;
        const query = category ? { category } : {};

        const userStories = await UserStory.find(query);
        res.json(userStories);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
    };

// Add a new user story
exports.addUserStory = async (req, res) => {
    try {
      const { title, description, priority, category } = req.body;
  
      // Validate priority and category
      if (!['feature', 'bug'].includes(category) || ![1, 2, 3].includes(priority)) {
        return res.status(400).send('Invalid category or priority');
      }
  
      const newUserStory = new UserStory({
        title,
        description,
        priority,
        category
      });
  
      const savedUserStory = await newUserStory.save();
      res.json(savedUserStory);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  
  // Update a user story by ID
  exports.updateUserStory = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, priority, category } = req.body;
  
      // Validate priority and category
      if (!['feature', 'bug'].includes(category) || ![1, 2, 3].includes(priority)) {
        return res.status(400).send('Invalid category or priority');
      }
  
      const updatedStory = await UserStory.findByIdAndUpdate(
        id,
        { title, description, priority, category },
        { new: true }
      );
  
      if (!updatedStory) {
        return res.status(404).send('User story not found');
      }
  
      res.json(updatedStory);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  
  // Delete a user story by ID
  exports.deleteUserStory = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedStory = await UserStory.findByIdAndDelete(id);
  
      if (!deletedStory) {
        return res.status(404).send('User story not found');
      }
  
      res.json({ msg: 'User story deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
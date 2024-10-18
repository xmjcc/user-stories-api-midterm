// models/Contact.js
const mongoose = require("mongoose");

const UserStoryDBSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: Number, enum: [1, 2, 3], required: true }, // 1 = Highest, 3 = Lowest,
    category: {
      type: String,
      enum: ["feature", "bug"], // category must be 'feature' or 'bug'
      required: true,
    },
  },
  { timestamps: true }
);

const UserStory= mongoose.model("UserStories", UserStoryDBSchema);

module.exports = UserStory;

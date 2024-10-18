// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const userStoriesRoute = require('./routes/userStoriesRoute');
const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use contact routes
app.use('/api/', userStoriesRoute);


// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to User Stories database!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

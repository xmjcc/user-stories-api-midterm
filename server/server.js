// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes'); // Import contact routes
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use contact routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to Dress Store1!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// const express = require('express');
// const app = express();
// const port = 3000;

// // Define a route for the homepage
// app.get('/', (req, res) => {
//     res.send('Welcome to Dress Store!');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

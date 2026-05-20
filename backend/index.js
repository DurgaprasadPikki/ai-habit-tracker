const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const habitRoutes = require('./routes/habits');
const aiRoutes = require('./routes/ai');

app.use('/api/habits', habitRoutes);
app.use('/api/ai', aiRoutes);

// Mock MongoDB Connection for environment without MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
} else {
  console.log('MONGODB_URI not found, running in mock mode (Persistence will not work)');
}

app.get('/', (req, res) => {
  res.send('AI Habit Tracker API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

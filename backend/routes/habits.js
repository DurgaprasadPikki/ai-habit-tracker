const express = require('express');
const router = express.Router();
const mock = require('./mockHabits');

const useMock = true; // Forcing mock since we know MongoDB is not available

// Get all habits
router.get('/', async (req, res) => {
  return mock.getHabits(req, res);
});

// Create a habit
router.post('/', async (req, res) => {
  return mock.createHabit(req, res);
});

// Update a habit (e.g., mark as completed)
router.patch('/:id/complete', async (req, res) => {
  return mock.completeHabit(req, res);
});

// Delete a habit
router.delete('/:id', async (req, res) => {
  return mock.deleteHabit(req, res);
});

module.exports = router;

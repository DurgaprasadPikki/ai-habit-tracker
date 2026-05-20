const habits = [];
let nextId = 1;

// Get all habits
const getHabits = async (req, res) => {
  res.json(habits);
};

// Create a habit
const createHabit = async (req, res) => {
  const habit = {
    _id: (nextId++).toString(),
    name: req.body.name,
    description: req.body.description,
    frequency: req.body.frequency,
    completedDates: [],
    streak: 0,
    createdAt: new Date()
  };
  habits.push(habit);
  res.status(201).json(habit);
};

// Update a habit
const completeHabit = async (req, res) => {
  const habit = habits.find(h => h._id === req.params.id);
  if (!habit) return res.status(404).json({ message: 'Habit not found' });

  const today = new Date().setHours(0, 0, 0, 0);
  const alreadyCompleted = habit.completedDates.some(date =>
    new Date(date).setHours(0, 0, 0, 0) === today
  );

  if (!alreadyCompleted) {
    habit.completedDates.push(new Date());
    habit.streak += 1;
  }

  res.json(habit);
};

// Delete a habit
const deleteHabit = async (req, res) => {
  const index = habits.findIndex(h => h._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Habit not found' });
  habits.splice(index, 1);
  res.json({ message: 'Habit deleted' });
};

module.exports = { getHabits, createHabit, completeHabit, deleteHabit };

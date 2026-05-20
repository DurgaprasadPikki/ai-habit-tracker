import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import Analytics from './components/Analytics';
import AISuggestion from './components/AISuggestion';
import { Layout } from 'lucide-react';

function App() {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/habits');
      setHabits(response.data);
    } catch (error) {
      console.error('Error fetching habits:', error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const handleHabitAdded = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const handleHabitUpdated = (updatedHabit) => {
    setHabits(habits.map(h => h._id === updatedHabit._id ? updatedHabit : h));
  };

  const handleHabitDeleted = (deletedId) => {
    setHabits(habits.filter(h => h._id !== deletedId));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Layout size={28} />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Habit<span className="text-indigo-600">Flow</span>
            </h1>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Analytics habits={habits} />
            <HabitList
              habits={habits}
              onHabitUpdated={handleHabitUpdated}
              onHabitDeleted={handleHabitDeleted}
            />
          </div>

          <div className="space-y-8">
            <AISuggestion />
            <AddHabitForm onHabitAdded={handleHabitAdded} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

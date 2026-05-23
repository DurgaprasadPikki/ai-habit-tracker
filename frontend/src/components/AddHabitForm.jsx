import React, { useState } from 'react';
import axios from 'axios';

const AddHabitForm = ({ onHabitAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/habits', {
        name,
        description,
        frequency
      });
      onHabitAdded(response.data);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card mb-8">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">Add New Habit</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Habit Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="e.g., Read for 30 mins"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
            placeholder="Why do you want to do this?"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="input-field"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn-primary w-full"
        >
          Add Habit
        </button>
      </div>
    </form>
  );
};

export default AddHabitForm;

import React from 'react';
import { CheckCircle, Trash2, Flame } from 'lucide-react';
import axios from 'axios';

const HabitItem = ({ habit, onHabitUpdated, onHabitDeleted }) => {
  const handleComplete = async () => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/habits/${habit._id}/complete`);
      onHabitUpdated(response.data);
    } catch (error) {
      console.error('Error completing habit:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/habits/${habit._id}`);
      onHabitDeleted(habit._id);
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  const isCompletedToday = () => {
    const today = new Date().setHours(0, 0, 0, 0);
    return habit.completedDates.some(date =>
      new Date(date).setHours(0, 0, 0, 0) === today
    );
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition duration-200">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleComplete}
          disabled={isCompletedToday()}
          className={`p-2 rounded-full transition ${
            isCompletedToday()
              ? 'bg-green-100 text-green-600 cursor-default'
              : 'bg-slate-100 text-slate-400 hover:bg-indigo-100 hover:text-indigo-600'
          }`}
        >
          <CheckCircle size={24} />
        </button>
        <div>
          <h3 className={`font-semibold ${isCompletedToday() ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
            {habit.name}
          </h3>
          <p className="text-sm text-slate-500">{habit.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-orange-500 font-bold">
          <Flame size={20} className="mr-1" />
          {habit.streak}
        </div>
        <button
          onClick={handleDelete}
          className="p-2 text-slate-400 hover:text-red-500 transition"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default HabitItem;

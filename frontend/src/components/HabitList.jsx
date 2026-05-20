import React from 'react';
import HabitItem from './HabitItem';

const HabitList = ({ habits, onHabitUpdated, onHabitDeleted }) => {
  if (habits.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
        <p className="text-slate-500">No habits tracked yet. Start by adding one above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map(habit => (
        <HabitItem
          key={habit._id}
          habit={habit}
          onHabitUpdated={onHabitUpdated}
          onHabitDeleted={onHabitDeleted}
        />
      ))}
    </div>
  );
};

export default HabitList;

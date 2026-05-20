import React from 'react';
import { BarChart2, Award, Zap } from 'lucide-react';

const Analytics = ({ habits }) => {
  const totalHabits = habits.length;
  const totalStreaks = habits.reduce((acc, habit) => acc + habit.streak, 0);
  const bestStreak = habits.length > 0 ? Math.max(...habits.map(h => h.streak)) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
          <BarChart2 size={24} />
        </div>
        <div>
          <p className="text-sm text-slate-500 font-medium">Total Habits</p>
          <p className="text-2xl font-bold text-slate-800">{totalHabits}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-4">
        <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
          <Zap size={24} />
        </div>
        <div>
          <p className="text-sm text-slate-500 font-medium">Total Streaks</p>
          <p className="text-2xl font-bold text-slate-800">{totalStreaks}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
          <Award size={24} />
        </div>
        <div>
          <p className="text-sm text-slate-500 font-medium">Best Streak</p>
          <p className="text-2xl font-bold text-slate-800">{bestStreak}</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

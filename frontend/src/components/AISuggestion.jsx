import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparkles } from 'lucide-react';

const AISuggestion = () => {
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchSuggestion = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/ai/suggest');
      setSuggestion(response.data.suggestion);
    } catch (error) {
      console.error('Error fetching AI suggestion:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSuggestion();
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 rounded-xl text-white shadow-lg mb-8">
      <div className="flex items-center space-x-2 mb-2">
        <Sparkles size={20} />
        <h2 className="text-lg font-semibold">AI Suggestion</h2>
      </div>
      <p className="text-indigo-100 mb-4 italic">
        "{loading ? 'Thinking...' : suggestion}"
      </p>
      <button
        onClick={fetchSuggestion}
        className="bg-white text-indigo-600 px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-50 transition"
      >
        Get New Tip
      </button>
    </div>
  );
};

export default AISuggestion;

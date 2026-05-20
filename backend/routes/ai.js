const express = require('express');
const router = express.Router();

router.get('/suggest', (req, res) => {
  const suggestions = [
    "Drink 8 glasses of water today.",
    "Read for 20 minutes before bed.",
    "Take a 15-minute walk outside.",
    "Meditate for 5 minutes.",
    "Write down three things you are grateful for."
  ];
  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  res.json({ suggestion: randomSuggestion });
});

module.exports = router;

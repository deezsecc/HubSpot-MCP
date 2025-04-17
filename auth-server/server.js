// server.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// A basic route to verify the API key
app.get('/verify', (req, res) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(400).json({ message: 'API key is required' });
  }

  if (apiKey === process.env.VALID_API_KEY) {
    return res.status(200).json({ message: 'API key is valid' });
  } else {
    return res.status(401).json({ message: 'Invalid API key' });
  }
});

app.listen(port, () => {
  console.log(`Authentication server running at http://localhost:${port}`);
});

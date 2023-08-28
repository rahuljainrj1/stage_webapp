// server.js
const express = require('express');
const path = require('path');

const app = express();

// Redirect all subpages to the main page
app.get('*', (req, res) => {
  res.redirect('https://stageapp.in');
});

// Serve static assets from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

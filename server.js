const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Path to your JSON file
const dataPath = path.join(__dirname, 'fishbowl.json');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Endpoint to get fishbowl data
app.get('/fishbowl', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data file');
    }
    const jsonData = JSON.parse(data);
    const randomEntry = jsonData[Math.floor(Math.random() * jsonData.length)];
    res.send(randomEntry);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

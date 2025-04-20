const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from home');
});

app.listen(3000, () => {
  console.log('home running on port 3000');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from contact');
});

app.listen(3000, () => {
  console.log('contact running on port 3000');
});

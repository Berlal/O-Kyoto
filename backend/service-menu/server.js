const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from menu');
});

app.listen(3000, () => {
  console.log('menu running on port 3000');
});

'use strict';

import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/groot', (req, res) => {
  const recievedValue = Object.values(req.query)[0];
  if (!req.query) {
    return res.status(400).send('Error: I am Groot!');
  }
  return res.json({
    recieved: recievedValue,
    Translated: 'I am Groot',
  });
});

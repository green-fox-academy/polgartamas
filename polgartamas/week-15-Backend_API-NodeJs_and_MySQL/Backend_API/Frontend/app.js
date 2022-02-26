const e = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.use(express.static(__dirname + '/assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  const received = req.query.input;
  if (received === undefined) {
    return res.status(200).json({ error: 'Please provide an input!' });
  }
  const result = received * 2;

  return res.json({ received: parseInt(received), result: result });
});

app.get('/greeter', (req, res) => {
  const inputName = req.query.name;
  const inputTitle = req.query.title;
  if (inputName === undefined && inputTitle === undefined) {
    return res
      .status(400)
      .json({ error: 'Please provide a name and a title!' });
  }
  if (inputName === undefined) {
    return res.status(400).json({ error: 'Please provide a name!' });
  }
  if (inputTitle === undefined) {
    return res.status(400).json({ error: 'Please provide a title!' });
  }

  return res.json({
    welcome_message: `Oh, hi there ${inputName}, my dear ${inputTitle}!`,
  });
});

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  if (appendable === undefined) {
    return res.status(404);
  }
  const result = appendable.concat('a');

  return res.json({ appended: result });
});

app.post('/dountil/:operation', (request, response) => {
  const { operation } = request.params;
  const innerObjectNumber = request.body.until;
  console.log(operation);
  console.log(innerObjectNumber);
  if (innerObjectNumber === undefined) {
    return response.status(404);
  }

  if (operation === 'sum') {
    let sumCounter = 1;
    for (let i = 2; i <= innerObjectNumber; i++) {
      sumCounter += i;
    }
    return response.json({ result: sumCounter });
  }
  if (operation === 'factor') {
    let sumCounter = 1;
    for (let i = 2; i <= innerObjectNumber; i++) {
      sumCounter *= i;
    }
    return response.json({ result: sumCounter });
  }
});

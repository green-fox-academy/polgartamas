import express from 'express';

import mysql from 'mysql';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Connected to localhost:${PORT}`);
});

let conn = mysql.createConnection({
  password: 'password',
  host: 'localhost',
  user: 'root',
  database: 'reddit',
});

conn.connect((err) => {
  if (err) {
    console.log('Cannot connect to the db!', err);
    return;
  }
  console.log('Connection established');
});

app.use(express.json());

app.get('/hello', (_request, response) => {
  response.send('Hello world!');
});

app.get('/posts', (_request, response) => {
  conn.query('SELECT * FROM posts', (err, posts) => {
    if (err) {
      console.log(err);
      return response.status(500).send();
    }
    return response.json(posts);
  });
});

app.post('/posts', (request, response) => {
  const title = request.body.title;
  const url = request.body.url;
  const score = request.body.score;
  conn.query(
    `INSERT INTO posts (title, url, timestamp, score) VALUES ("${title}", "${url}", CURRENT_TIMESTAMP,"${score}")`,
    (err, posts) => {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }
      return response.json(posts);
    }
  );
});

app.put('/posts/:id/upvote', (request, response) => {
  const { id } = request.params;
  conn.query(
    `UPDATE posts SET score = score + 1 WHERE id = ${id}`,
    (err, posts) => {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }
      return response.json(posts);
    }
  );
});

app.put('/posts/:id/downvote', (request, response) => {
  const { id } = request.params;
  conn.query(
    `UPDATE posts SET score = score - 1 WHERE id = ${id}`,
    (err, posts) => {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }
      return response.json(posts);
    }
  );
});

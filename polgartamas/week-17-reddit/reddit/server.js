import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Connected to localhost:${PORT}`);
});

const conn = mysql.createConnection({
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
  const { title, url } = request.body;
  if (!title || !url) {
    return response.status(400).send('Please provide title and url!');
  }
  conn.query(
    `INSERT INTO posts (title, url) VALUES (?,?)`,
    [title, url],
    (err, posts) => {
      if (err) {
        console.log(err);
        return response.status(500).send(Error);
      }
      conn.query(
        `SELECT * FROM posts WHERE id=(?)`,
        [posts.insertId],
        (err, posts) => {
          if (err) {
            console.log(err);
            response.status(500).send(mysqlError);
            return;
          }
          return response.status(200).json(posts);
        }
      );
    }
  );
});

app.put('/posts/:id/upvote', (request, response) => {
  const { id } = request.params;
  conn.query(
    `UPDATE posts SET score = score + 1 WHERE id = (?)`,
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }
      if (result.affectedRows === 0) {
        return response.status(404).send('Post not found');
      }
      conn.query(`SELECT * FROM posts WHERE id=(?)`, [id], (err, result) => {
        if (err) {
          console.log(err);
          return response.status(500).json(err);
        }
        console.log(result);
        return response.status(200).json(result);
      });
    }
  );
});

app.put('/posts/:id/downvote', (request, response) => {
  const { id } = request.params;

  conn.query(
    `UPDATE posts SET score = score - 1 WHERE id = (?)`,
    [id],
    (err, posts) => {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }
      if (posts.affectedRows === 0) {
        return response.status(404).send('Post not found');
      }
      conn.query(`SELECT * FROM posts WHERE id=(?)`, [id], (err, posts) => {
        if (err) {
          console.log(err);
          return response.status(500).json(err);
        }
        return response.status(200).json(posts);
      });
    }
  );
});

import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import { request } from 'http';

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
  database: 'music',
});

conn.connect((err) => {
  if (err) {
    console.log('Cannot connect to the db!', err);
    return;
  }
  console.log('Connection established');
});

app.get('/api/music/list', (request, response) => {
  conn.query('SELECT * FROM music', (err, music) => {
    if (err) {
      console.log(err);
      return response.status(500).send();
    }
    return response.status(200).json(music);
  });
});

app.post('/api/music', (request, response) => {
  const { title, author, time } = request.body;
  conn.query(
    'INSERT INTO music (title, author, time) VALUES (?,?,?)',
    [title, author, time],
    (err, music) => {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }
      conn.query('SELECT * FROM music', (err, music) => {
        if (err) {
          console.log(err);
          return response.status(500).send();
        }
        return response.status(200).json(music);
      });
    }
  );
});

app.put('/api/music/:id', (request, response) => {
  const { id } = request.params;
  const { author } = request.body;
  conn.query('SELECT * FROM music where id = ?', [id], (err, music) => {
    if (err) {
      console.log(err);
      return response.status(500).send();
    }
    if (music.length < 1) {
      return response.send('Provide existing id!');
    }
    conn.query(
      `UPDATE music SET author = ${author} WHERE id = ?`,
      [parseInt(id)],
      (err, music) => {
        if (err) {
          console.log(err);
          return response.status(500).send();
        }
        conn.query('SELECT * FROM music where id = ?', [id], (err, music) => {
          if (err) {
            console.log(err);
            return response.status(500).send();
          }
          return response.status(200).json(music);
        });
      }
    );
  });
});

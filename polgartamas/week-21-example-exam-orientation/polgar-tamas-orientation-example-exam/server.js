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
  database: 'url',
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

app.get('/api/links', (_request, response) => {
  conn.query('SELECT id, url, alias, hitCount FROM url', (err, links) => {
    if (err) {
      console.log(err);
      return response.status(500).send(err);
    }
    return response.json(links);
  });
});

app.post('/api/links', (request, response) => {
  const { url, alias } = request.body;
  conn.query(`SELECT * FROM url WHERE alias = ?  `, [alias], (err, links) => {
    if (err) {
      console.log(err);
      return response.status(500).send(err);
    }
    if (links.length > 0) return response.status(400).json(links);
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    conn.query(
      `INSERT INTO url (url, alias, secretCode) VALUES (?,?,?)`,
      [url, alias, randomCode],
      (err, links) => {
        if (err) {
          console.log(err);
          return response.status(500).send(err);
        }
        conn.query(
          `SELECT * FROM url WHERE alias = (?)`,
          [alias],
          (err, links) => {
            if (err) {
              console.log(err);
              return response.status(500).send(err);
            }
            return response.status(200).json(links);
          }
        );
      }
    );
  });
});

app.get('/a/:alias', (request, response) => {
  const { alias } = request.params;
  conn.query(`SELECT * FROM url WHERE alias = ?`, [alias], (err, links) => {
    if (err) {
      console.log(err);
      return response.status(500).send(err);
    }
    if (links.length < 1) return response.status(404).send();
    conn.query(
      `UPDATE url SET hitCount = hitCount+1 WHERE alias = (?)`,
      [alias],
      (err, links) => {
        if (err) {
          console.log(err);
          return response.status(500).send(err);
        }
        conn.query(
          `SELECT url FROM url WHERE alias = ?`,
          [alias],
          (err, links) => {
            if (err) {
              console.log(err);
              return response.status(500).send(err);
            }
            return response.status(200).send(links);
          }
        );
      }
    );
  });
});

app.delete('/api/links/:id', (request, response) => {
  const { id } = request.params;
  const { secretCode } = request.body;
  conn.query('SELECT * FROM url WHERE id = (?)', [id], (err, links) => {
    if (err) {
      console.log(err);
      return response.status(500).send();
    }
    if (links.length < 1) {
      return response.status(404).send();
    }
    if (links[0].secretCode !== secretCode) {
      return response.status(403).send();
    }
    conn.query('DELETE FROM url WHERE id = (?)', [id], (err, links) => {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }
      return response.status(204).send();
    });
  });
});

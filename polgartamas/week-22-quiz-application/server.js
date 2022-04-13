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
  database: 'quiz',
});

conn.connect((err) => {
  if (err) {
    console.log('Cannot connect to the db!', err);
    return;
  }
  console.log('Connection established');
});

app.get('/api/game', (request, response) => {
  conn.query(
    'SELECT id FROM questions ORDER BY id DESC LIMIT 1',
    (err, highestId) => {
      if (err) {
        console.log(err);
        return response.status(500).send(err);
      }
      const newId = highestId[0].id;
      const randomId = Math.floor(Math.random() * newId) + 1;
      conn.query(
        'SELECT * FROM questions LEFT JOIN answers on questions.id=answers.question_id WHERE questions.id = ?',
        [randomId],
        (err, result) => {
          if (err) {
            console.log(err);
            response.status(500).send();
            return;
          }
          const resultQuestion = result[0].question;
          for (let i = 0; i < result.length; i++) {
            delete result[i].question;
          }
          const newObject = {
            id: result[0].question_id,
            question: resultQuestion,
            answers: result,
          };
          return response.status(200).json(newObject);
        }
      );
    }
  );
});

app.get('/api/questions', (request, response) => {
  conn.query('SELECT * FROM questions', (err, result) => {
    if (err) {
      console.log(err);
      response.status(500).send();
      return;
    }
    return response.status(200).json(result);
  });
});

app.post('/api/questions', (request, response) => {
  const { question, answers } = request.body;
  conn.query(
    'INSERT INTO questions (question) VALUES (?)',
    [question],
    (err, result) => {
      if (err) {
        console.log(err);
        return response.status(500).send(err);
      }
      conn.query(
        'SELECT id FROM questions ORDER BY id DESC LIMIT 1',
        (err, highestId) => {
          if (err) {
            console.log(err);
            return response.status(500).send(err);
          }
          const newId = highestId[0].id;
          const query =
            'INSERT INTO answers (question_id, answer, is_correct) VALUES ?';
          let values = [];
          for (let i = 0; i < answers.length; i++) {
            values.push([newId, answers[i].answer, answers[i].is_correct]);
          }
          conn.query(query, [values], (err, result) => {
            if (err) {
              console.log(err);
              return response.status(500).send(err);
            }
            response.status(200).send();
          });
        }
      );
    }
  );
});

app.delete('/api/questions/:id', (request, response) => {
  const { id } = request.params;
  conn.query('DELETE FROM questions WHERE id=(?)', [id], (err, result) => {
    if (err) {
      console.log(err);
      return response.status(500).send();
    }
    conn.query(
      'DELETE FROM answers WHERE question_id=(?)',
      [id],
      (err, result) => {
        if (err) {
          console.log(err);
          return response.status(500).send();
        }
        return response.status(200).send();
      }
    );
  });
});

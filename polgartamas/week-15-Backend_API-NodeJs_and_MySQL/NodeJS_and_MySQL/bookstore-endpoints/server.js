import express, { response } from 'express';
import mysql from 'mysql';
import { stringify } from 'querystring';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Connected to localhost:${PORT}`);
});

app.use(express.static('public'));

let conn = mysql.createConnection({
  password: 'password',
  host: 'localhost',
  user: 'root',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.log('Cannot connect to the db', err);
    return;
  }

  console.log('Connection established');
});

app.get('/booktitles', (request, response) => {
  conn.query('SELECT book_name FROM book_mast', (err, booknames) => {
    if (err) {
      console.log(err);
      return response.status(500).json(err);
    }
    response.json(booknames);
  });
});

app.get('/allbookdatas', (request, response) => {
  conn.query(
    'SELECT b.book_name, a.aut_name, c.cate_descrip, d.sell_price, p.pub_name FROM  book_mast AS b LEFT JOIN author AS a ON b.aut_id=a.aut_id LEFT JOIN category AS c ON b.cate_id=c.cate_id LEFT JOIN despatch AS d ON b.aut_id=d.aut_id LEFT JOIN publisher AS p ON b.pub_id=p.pub_id',
    (err, allbookdatas) => {
      if (err) {
        console.log(err);
        return response.status(500).json(err);
      }
      response.json(allbookdatas);
    }
  );
});

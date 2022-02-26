// import { response } from 'express';

// import { stringify } from 'querystring';

const BASE_URL = 'http://localhost:3000';

const list = document.getElementById('booklist');

function getBookNames() {
  return fetch(`${BASE_URL}/booktitles`)
    .then((response) => response.json())
    .then((books) => {
      for (const book of books) {
        const li = document.createElement('li');
        li.textContent = `${book.book_name}`;
        list.appendChild(li);
      }
    })
    .catch((err) => console.log('Err', err));
}
getBookNames();

const table = document.getElementsByTagName('table');

function renderBooks() {
  return fetch(`${BASE_URL}/allbookdatas`)
    .then((response) => response.json())
    .then((books) => {
      const tbody = document.createElement('tbody');
      for (const book of books) {
        const tr = document.createElement('tr');
        const bookName = createCellElement(`${book.book_name}`);
        tr.appendChild(bookName);
        console.log(bookName);
        tr.appendChild(createCellElement(`${book.aut_name}`));
        tr.appendChild(createCellElement(`${book.cate_descrip}`));
        tr.appendChild(createCellElement(`${book.sell_price}`));
        tr.appendChild(createCellElement(`${book.pub_name}`));
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    })
    .catch((err) => console.log('Err', err));
}
renderBooks();

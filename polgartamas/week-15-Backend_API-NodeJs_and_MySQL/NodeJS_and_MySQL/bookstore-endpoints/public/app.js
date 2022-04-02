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

const table = document.getElementById('mytable');

function createCellElement(value) {
  const td = document.createElement('td');
  td.innerText = value;
  return td;
}

const userFilter = {
  category: 'Science',
  publisher: null,
  plt: null,
  pgt: null,
};

function createQueryByFilter(filter) {
  let result = '';
  let isFirstParam = true;
  if (filter.category !== null) {
    if (isFirstParam) {
      result += '?';
      isFirstParam = false;
    } else {
      result += '&';
    }
    result += `category=${filter.category}`;
  }
  if (filter.publisher !== null) {
    if (isFirstParam) {
      result += '?';
      isFirstParam = false;
    } else {
      result += '&';
    }
    result += `category=${filter.publisher}`;
  }
  if (filter.plt !== null) {
    if (isFirstParam) {
      result += '?';
      isFirstParam = false;
    } else {
      result += '&';
    }
    result += `category=${filter.plt}`;
  }
  if (filter.pgt !== null) {
    if (isFirstParam) {
      result += '?';
      isFirstParam = false;
    } else {
      result += '&';
    }
    result += `category=${filter.pgt}`;
  }
  return result;
}

function renderBooks() {
  let url = `${BASE_URL}/allbookdatas`;
  url += createQueryByFilter(userFilter);
  console.log(url);
  return fetch(url)
    .then((response) => response.json())
    .then((books) => {
      const tbody = document.createElement('tbody');
      for (const book of books) {
        const tr = document.createElement('tr');
        tr.appendChild(createCellElement(`${book.book_name}`));
        tr.appendChild(createCellElement(`${book.aut_name}`));
        tr.appendChild(createCellElement(`${book.cate_descrip}`));
        tr.appendChild(createCellElement(`${book.pub_name}`));
        tr.appendChild(createCellElement(`${book.book_price}`));
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    })
    .catch((err) => console.log('Err', err));
}
renderBooks();

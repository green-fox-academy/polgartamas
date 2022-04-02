const SERVER_URL = 'http://localhost:3000';

function submitNewPost(title, url) {
  return fetch(`${SERVER_URL}/posts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, url }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

const newTitle = document.querySelector('#title');
const newUrl = document.querySelector('#url');
const submitForm = document.querySelector('#submit-form');
submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  submitNewPost(newTitle.value, newUrl.value);
});

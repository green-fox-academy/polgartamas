const SERVER_URL = 'http://localhost:3000';

const newURL = document.querySelector('#url');
const newAlias = document.querySelector('#alias');
const pTag = document.querySelector('.text-for-change');
function submitNewLink(url, alias) {
  return fetch(`${SERVER_URL}/api/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, alias }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        pTag.textContent = `Your alias is already in use!`;
        return;
      }
    })
    .then((response) => {
      newURL.value = '';
      newAlias.value = '';
      pTag.textContent = `Your URL is aliased to ${response[0].alias} and your secret code is ${response[0].secretCode}.`;
      return;
    })
    .catch((err) => console.log(err));
}

const submitForm = document.querySelector('#submit-form');
submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  submitNewLink(newURL.value, newAlias.value);
});

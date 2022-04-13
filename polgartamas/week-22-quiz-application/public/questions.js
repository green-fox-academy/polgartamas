const SERVER_URL = 'http://localhost:3000';

const oneBlock = document.querySelector('#question-delete-button');
const oneQuestion = document.querySelector('.one-question');
const oneDeleteButton = document.querySelector('.delete-button');

function deleteQuestion(id) {
  fetch(`${SERVER_URL}/api/questions/${id}`, { method: 'DELETE' }).then(
    (response) => response.json().catch((err) => console.log(err))
  );
}

function getAllQuestions() {
  fetch(`${SERVER_URL}/api/questions`, { method: 'GET' })
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        const question = document.createElement('p');
        question.textContent = response[i].question;
        oneBlock.appendChild(question);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('dataid', response[i].id);
        oneBlock.appendChild(deleteButton);
        const buttonArray = document.querySelectorAll('button');
        buttonArray[i].addEventListener('click', function (e) {
          e.preventDefault();
          deleteQuestion(deleteButton.getAttribute('dataid'));
          getAllQuestions();
        });
      }
      return;
    });
}

getAllQuestions();

const newQuestion = document.querySelector('.question-text');
const answerArray = document.querySelectorAll('.answer');
const radioArray = document.querySelectorAll('radio');
const submitForm = document.querySelector('.submit');

function setNewQuestion(question, answers) {
  return fetch(`${SERVER_URL}/api/questions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, answers }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('valami');
  newAnswers = [];
  for (let i = 0; i < answerArray.length; i++) {
    newAnswers.push([answerArray[i].value], radioArray[i]);
  }
  setNewQuestion(newQuestion.value, newAnswers);
});

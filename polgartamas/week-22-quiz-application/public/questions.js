const SERVER_URL = 'http://localhost:3000';

const oneBlock = document.querySelector('#question-delete-button');
const oneQuestion = document.querySelector('.one-question');
const oneDeleteButton = document.querySelector('.delete-button');

function deleteQuestion(id) {
  fetch(`${SERVER_URL}/api/questions/${id}`, { method: 'DELETE' }).catch(
    (err) => console.log(err)
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
          oneBlock.textContent = '';
          getAllQuestions();
        });
      }
      return;
    });
}

getAllQuestions();

const newQuestion = document.querySelector('.question-text');
const answerArray = document.querySelectorAll('.answer');
const radioArray = document.querySelectorAll('.radio');
const submitForm = document.querySelector('.submit');

function setNewQuestion(question, answers) {
  return fetch(`${SERVER_URL}/api/questions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, answers }),
  }).catch((err) => console.log(err));
}

submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newAnswers = [];
  for (let i = 0; i < answerArray.length; i++) {
    let checkedNumber = 0;
    if (radioArray[i].checked === true) {
      checkedNumber = 1;
    }
    newAnswers.push({
      answer: answerArray[i].value,
      is_correct: checkedNumber,
    });
  }
  setNewQuestion(newQuestion.value, newAnswers);
});

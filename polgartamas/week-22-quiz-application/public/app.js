const SERVER_URL = 'http://localhost:3000';

const buttons = document.querySelector('#buttons');
const counter = document.querySelector('.counter');
const question = document.querySelector('.question');
const answerButton = document.querySelector('.answer');

let counter1 = 0;

function getOneRandomQuestion() {
  fetch(`${SERVER_URL}/api/game`)
    .then((response) =>
      response.json().then((response) => {
        console.log(response.answers);
        question.textContent = response.question;
        buttons.textContent = '';
        for (let i = 0; i < response.answers.length; i++) {
          const button = document.createElement('button');
          button.textContent = response.answers[i].answer;
          buttons.appendChild(button);
          const buttonArray = document.querySelectorAll('button');
          buttonArray[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (response.answers[i].is_correct === 1) {
              counter1++;
              getOneRandomQuestion();
              counter.textContent = counter1.toString();
              return;
            }
          });
        }
      })
    )
    .catch((err) => console.log(err));
}

getOneRandomQuestion();

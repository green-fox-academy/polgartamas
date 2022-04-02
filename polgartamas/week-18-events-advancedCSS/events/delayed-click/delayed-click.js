// Create a simple HTML document with one button.
// If the user clicks the button it should wait 2 seconds
// and it should show a text under the button: 2 seconds ellapsed

const myButton = document.querySelector('#myButton');
const myText = document.querySelector('p');
myButton.addEventListener('click', function () {
  setTimeout(() => {
    myText.innerText = '2 seconds ellapsed';
  }, 2000);
});

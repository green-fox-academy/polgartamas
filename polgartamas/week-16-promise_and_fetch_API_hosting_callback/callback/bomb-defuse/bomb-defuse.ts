// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

const display = document.querySelector('.display');

const timeout = setTimeout(() => {
  display.textContent = 'Bomb exploded';
}, 10000);

const button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick() {
  display.textContent = 'Bomb defused';
  clearTimeout(timeout);
  this.removeEventListener('click', handleClick);
}

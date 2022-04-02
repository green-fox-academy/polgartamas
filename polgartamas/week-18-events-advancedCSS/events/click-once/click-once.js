// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       Create an event listener which logs the current timestamp to the console once the button is clicked.
//       When the button is clicked for the second or any other times no event listener should be called.
//       Try to solve this two different ways.
//       hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
//     </script>
//     OR

const myButton = document.querySelector('#myButton');
console.log(myButton);
function timeStampMaker() {
  const ts = new Date();
  console.log(ts.toISOString());
}
myButton.addEventListener('click', timeStampMaker, { once: true });

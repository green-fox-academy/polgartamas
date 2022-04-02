// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       On the click of the button,
//       Count the items in the list
//       And display the result in the result element.
//     </script>

const liNumber = document.querySelectorAll('ul li').length;

const myButton = document.querySelector('#myButton');
const result = document.querySelector('.result');
myButton.addEventListener('click', function () {
  result.innerHTML = liNumber;
});

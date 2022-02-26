// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   Write the image's url to the console.
//   Replace the image with a picture of your favorite animal.
//   Make the link point to the Green Fox Academy website.
//   Disable the second button.
//   Replace its text with 'Don't click me!'.
// </script>
// OR
// <script src="attribute-1.js"></script> -->

const sourceImage = document.querySelector('img');
console.log(sourceImage);
sourceImage.setAttribute(
  'src',
  'https://hungarytoday.hu/wp-content/uploads/2021/12/panther-g0625497d0_1920-1536x1024.jpg'
);
const originalLink = document.querySelector('a');
originalLink.setAttribute('href', 'https://www.greenfoxacademy.com/');
const buttons = document.querySelectorAll('button');
buttons[1].remove();
buttons[0].innerHTML = "Don't click me!";

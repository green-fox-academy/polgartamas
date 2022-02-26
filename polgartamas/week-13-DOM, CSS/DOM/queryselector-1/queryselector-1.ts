// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       1. store the element that says 'The King' in the 'king' variable.
//       console.log it.
//       2. store 'The Businessman' and 'The Lamplighter'
//       in the 'businessLamp' variable.
//       console.log each of them.
//       3. store 'The King' and 'The Conceited Man'
//       in the 'conceitedKing' variable.
//       alert them one by one.
//       4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//       in the 'noBusiness' variable.
//       console.log each of them.
//     </script>
//     OR
//     <script src="queryselector-1.js"></script> -->

'use strict';

const king = document.querySelector('#b325');
console.log('king', king);
const businessLamp = document.querySelectorAll('.asteroid.big');
for (let i = 0; i < businessLamp.length; i++) {
  console.log('businessLamp', businessLamp[i]);
}
const conceitedKing = document.querySelectorAll('#b325, .asteroid.b326');
for (let i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].innerHTML);
}
const noBusiness = document.querySelectorAll(
  '#b325, .asteroid.b326, .asteroid.b329.big'
);
for (let i = 0; i < noBusiness.length; i++) {
  console.log('nobusiness', noBusiness[i]);
}

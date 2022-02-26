// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
//       If the first p has an 'apple' class, replace cat's content with 'dog'
//       Make apple red by adding a .red class
//       Make balloon less balloon-like (change its shape)
//     </script>
//     OR
//     <script src="classlist-1.js"></script> -->

const pClass = document.querySelectorAll('p');
console.log(pClass);
if (pClass[3].className === 'dolphin') {
  pClass[0].innerHTML = 'pear';
}
if (pClass[0].className === 'apple') {
  pClass[2].innerHTML = 'dog';
}
pClass[0].className += ' red';
const balloonStyle = document.querySelector('#r');
balloonStyle.style.borderRadius = '5%';
console.log(balloonStyle);

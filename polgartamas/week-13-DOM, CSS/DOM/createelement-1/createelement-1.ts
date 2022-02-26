// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       Add an item that says 'The Green Fox' to the asteroid list.
//       Add an item that says 'The Lamplighter' to the asteroid list.
//       Add a heading saying 'I can add elements to the DOM!' to the .container.
//       Add an image, any image, to the container.
//     </script>
//     OR
//     <script src="createelement-1.js"></script> -->

const ast = document.querySelector('.asteroids');
console.log(ast);

const newLi: HTMLLIElement = document.createElement('li');
console.log(newLi);
ast.appendChild(newLi);
newLi.textContent = 'The Green Fox';

const newLi2: HTMLLIElement = document.createElement('li');
console.log(newLi2);
ast.appendChild(newLi2);
newLi2.textContent = 'The Lamplighter';

const cont = document.querySelector('.container');
cont.textContent = 'I can add elements to the DOM!';

const newImage: HTMLImageElement = document.createElement('img');
newImage.setAttribute(
  'src',
  'https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg'
);

cont.append(newImage);

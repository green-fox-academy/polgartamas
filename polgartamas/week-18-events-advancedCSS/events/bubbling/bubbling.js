// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       Here is an image inspector, but the buttons are not implemented yet, that will
//       be your task!
//        - the nav buttons (up, down, left, right) move the background by 10px
//        - the zoom buttons increase/decrease the image by 20%
//        - attach only two event listeners to the nav element
//          - one for navigation
//          - one for zooming
//     </script>
//     OR

// let btns = document.querySelectorAll('button');
let btnsMove = document.querySelectorAll('[data-action="move"]');
let btnsZoom = document.querySelectorAll('[data-action="zoom"]');

console.log(btnsZoom);
const imgInspector = document.querySelector('.img-inspector');
console.log(imgInspector);
let xCoord = 0;
let yCoord = 0;
let bckgSize = 100;

for (let i = 0; i < btnsMove.length; i++) {
  btnsMove[i].addEventListener('click', function () {
    if (btnsMove[i].innerText === 'Up') {
      yCoord -= 10;
      imgInspector.style.backgroundPosition = `${xCoord}px ${yCoord}px`;
    }
    if (btnsMove[i].innerText === 'Down') {
      yCoord += 10;
      imgInspector.style.backgroundPosition = `${xCoord}px ${yCoord}px`;
    }
    if (btnsMove[i].innerText === 'Left') {
      xCoord -= 10;
      imgInspector.style.backgroundPosition = `${xCoord}px ${yCoord}px`;
    }
    if (btnsMove[i].innerText === 'Right') {
      xCoord += 10;
      imgInspector.style.backgroundPosition = `${xCoord}px ${yCoord}px`;
    }
  });
}

for (let i = 0; i < btnsZoom.length; i++) {
  btnsZoom[i].addEventListener('click', function () {
    if (btnsZoom[i].innerText === 'Zoom in') {
      bckgSize *= 1.2;
      imgInspector.style.backgroundSize = `${bckgSize}%`;
    }
    if (btnsZoom[i].innerText === 'Zoom out') {
      bckgSize *= 0.8;
      imgInspector.style.backgroundSize = `${bckgSize}%`;
    }
  });
}

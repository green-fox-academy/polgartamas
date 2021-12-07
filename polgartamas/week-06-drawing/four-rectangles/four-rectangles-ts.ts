'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

let color = 'red';
function randomColor() {
  color =
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')';

  return color;
}

for (let i = 0; i < 5; i++) {
  ctx.fillStyle = randomColor();
  ctx.beginPath();
  ctx.fillRect(50 * i, 50, 10 * i, 10 * i);
}

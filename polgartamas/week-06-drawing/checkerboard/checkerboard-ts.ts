'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

function fillWithRects(x: number, y: number, s: number) {
  ctx.fillRect(x, y, s, s);
}

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 8; j++) {
    ctx.fillStyle = 'white';
    ctx.fillStyle = 'black';
    if ((i + j) % 2 === 0) {
      ctx.fillStyle = 'white';
    } else {
      ctx.fillStyle = 'black';
    }
    fillWithRects(0 + i * 50, 0 + j * 50, 50);
  }
}

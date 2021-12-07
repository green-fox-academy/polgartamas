'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawPurpleBoxes(x: number, y: number, s: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, s, s);
}
let nextXCoord: number = 0;
let nextYCoord: number = 0;
let nextSize: number = 10;

for (let i = 0; i < 8; i++) {
  drawPurpleBoxes(nextXCoord, nextYCoord, nextSize, 'purple');
  nextXCoord += nextSize;
  nextYCoord += nextSize;
  nextSize += 10;
}

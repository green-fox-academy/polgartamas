'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawPurpleBoxes(x: number, y: number, s: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, s, s);
}
for (let i = 0; i < 19; i++) {
  drawPurpleBoxes(20 + i * 10, 20 + i * 10, 10, 'purple');
}

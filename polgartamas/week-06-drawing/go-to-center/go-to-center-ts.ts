'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop

function drawLine(x1: number, y1: number) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(300, 200);
  ctx.stroke();
}
drawLine(100, 100);

ctx.beginPath();
for (let i = 0; i < 3; i++) {
  function drawLine(x1: number, y1: number) {
    ctx.beginPath();
    ctx.moveTo(x1 + i * 100, y1);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }
  drawLine(100, 100);
}

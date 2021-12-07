'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function drawLine(x1, y1) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 + 50, y1);
  ctx.stroke();
}
drawLine(275, 100);

for (let i = 0; i < 3; i++) {
  function drawLine(x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x1, y1 + i * 100);
    ctx.lineTo(x1 + 50, y1 + i * 100);
    ctx.stroke();
  }
  drawLine(275, 100);
}

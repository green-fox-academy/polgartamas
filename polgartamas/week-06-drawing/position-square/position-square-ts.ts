'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

function drawSquare(x1: number, y1: number): void {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x1, y1, 50, 50);
  ctx.stroke();
}
drawSquare(100, 100);

for (let i = 0; i < 3; i++) {
  function drawSquare(x1: number, y1: number): void {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.strokeRect(x1 + i * 75, y1, 50, 50);
    ctx.stroke();
  }
  drawSquare(100, 100);
}

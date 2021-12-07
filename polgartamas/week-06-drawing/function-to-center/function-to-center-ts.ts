'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

function drawLine(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}
const spaceBetweenLines: number = 20;
for (let i: number = 0; i <= canvas.width / 20; i++) {
  drawLine(i * spaceBetweenLines, 0);
  drawLine(i * spaceBetweenLines, 400);
}
for (let i: number = 0; i <= canvas.height / 20; i++) {
  drawLine(0, i * spaceBetweenLines);
  drawLine(600, i * spaceBetweenLines);
}

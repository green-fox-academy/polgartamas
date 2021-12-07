'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function randomColor(): string {
  return (
    'rgb(' +
    Math.floor(255 * Math.random()) +
    ', ' +
    Math.floor(255 * Math.random()) +
    ', 0'
  );
}
function createSquare(s: number, color: string): void {
  ctx.strokeStyle = color;
  ctx.strokeRect(250, 150, s, s);
  ctx.stroke;
}
createSquare(100, randomColor());

function fillWithRects(x: number, y: number, s: number, color: string): void {
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, s, s);
  ctx.stroke;
}
fillWithRects(0, 0, 50, randomColor());

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 8; j++)
    fillWithRects(0 + i * 50, 0 + j * 50, 50, randomColor());
}

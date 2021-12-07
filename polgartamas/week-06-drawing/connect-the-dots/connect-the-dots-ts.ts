'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let listOfCoord: number[][] = [
  [10, 10],
  [290, 10],
  [290, 290],
  [10, 290],
];

let anotherListOfCoord: number[][] = [
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
];

function connectLines(n: number[][]) {
  ctx.beginPath();
  for (let i: number = 0; i < n.length - 0; i++) {
    ctx.lineTo(n[i][0], n[i][1]);
  }
  ctx.lineTo(n[0][0], n[0][1]);
  ctx.stroke();
}
connectLines(listOfCoord);
connectLines(anotherListOfCoord);

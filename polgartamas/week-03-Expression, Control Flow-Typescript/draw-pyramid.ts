'use strict';

export function drawPyramid(lineCount: number): void {
  let string = '';
  for (let i = 1; i <= lineCount; i++) {
    for (let j = 1; j <= lineCount - i; j++) {
      string += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      string += '*';
    }
    string += '\n';
  }
  console.log(string);
}
drawPyramid(10);

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

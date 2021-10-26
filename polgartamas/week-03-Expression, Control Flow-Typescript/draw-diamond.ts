'use strict';

let lineCount3 = 7;
let string1 = "";
for (let i = 1; i <= lineCount3; i++) {
  for (let j =lineCount3; j > i; j--) {
    string1 += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string1 += "*";
  }
  string1 += "\n";
}
for (let i = 1; i <= (lineCount3-1); i++) {
    for (let j = 0; j < i; j++) {
      string1 += " ";
    }
    for (let k = (lineCount3-i)*2-1; k>0; k--) {
      string1 += "*";
    }
    string1 += "\n";
  }
console.log(string1);


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
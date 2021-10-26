'use strict';

let lineCount4 = 6;
let string3 = "";

for(let i = 0; i < lineCount4; i++) {
  for(let j = 0; j < lineCount4; j++) {
    if(i === 0 || i === lineCount4 - 1) {
      string3 += "%";
    }
    else {
      if(j === 0 || j === lineCount4 - 1) {
        string3 += "%";
      }
      else {
        string3 += " ";
      }
    }
  }
  string3 += "\n";
}
console.log(string3);

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is


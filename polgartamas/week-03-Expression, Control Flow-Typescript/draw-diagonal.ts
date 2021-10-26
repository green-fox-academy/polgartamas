'use strict';

let lineCount5: number = 6;
let string4 = "";

for(let i = 0; i < lineCount5; i++) {
  for(let j = 0; j < lineCount5; j++) {
    if(i === 0 || i === lineCount5 - 1) {
      string4 += "%";
    }
    else {
      if(j === 0 || j === lineCount5 - 1 || i === j) {
        string4 += "%";
      }
      else {
        string4 += " ";
      }
    }
  }
  string4 += "\n";
}
console.log(string4);

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

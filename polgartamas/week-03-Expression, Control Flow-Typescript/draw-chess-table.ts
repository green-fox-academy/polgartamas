'use strict';

let lineCount6 = 8;
let string5 = "";

for (let i=0;i<lineCount6;i++) {
    for (let j=0;j<lineCount6;j++){
        if (i%2!==0 || j%2===0 || i===j){
            string5 += "%";
        }
        else if (i%2===0 || j%2===0 || i!==j) {string5 += "*";
        } else string5 += " "
    }
    string5 += "\n";
}
console.log(string5);

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
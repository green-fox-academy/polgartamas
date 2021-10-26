'use strict';


// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let t1: string = "*";
let lineCount2: number = 4;
for (let s: number = 1; s<=lineCount2; s++){
    let multiT1 = t1.repeat(s);
    console.log(multiT1);    
}



'use strict';

let a: number = 24;
let output1: number = 0;

// if a is even increment output1 by one
if (a%2===0) {
console.log(output1+1);
}


let b1: number = 13;
let output2: string = '';

// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"
if (10<b1 && b1<20) {
console.log("Sweet!");
} else if (b1<10) {
console.log("Less!");
} else {
console.log("More!");
}


let c1: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (credits>=50 && isBonus===false){
    console.log(c1-2);
} else if (credits<50 && isBonus===false){
    console.log(c1-1);
} else {
    console.log(c1);
}


let d1: number =  8;
let time: number = 120;
let output3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"

if (d1%4===0 && time<=200){
    console.log("check");
} else if (time>200){
    console.log("Time out");
} else {console.log ("Run Forest Run!");
}
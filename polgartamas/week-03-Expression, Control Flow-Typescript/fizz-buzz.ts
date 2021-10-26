'use strict';

// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

for (let z: number = 1; z<=100; z++){
    if (z%3===0 && z%5===0){
        console.log("FizzBuzz");
    }else if (z%3===0){
        console.log("Fizz");
    }else if (z%5===0){
        console.log("Buzz");
    }else {
        console.log(z);
    }
} 

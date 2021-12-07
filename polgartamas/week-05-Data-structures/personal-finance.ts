// Personal finance

// We are going to represent our expenses in a list containing integers.

//     Create a list with the following items:
//         500, 1000, 1250, 175, 800 and 120
//     Create an application which prints out the answers to the following questions:
//         How much did we spend?
//         Which was our greatest expense?
//         Which was our cheapest spending?
//         What was the average amount of our spendings?

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];
let sum = expenses.reduce((a, b) => a + b, 0);
console.log('How much did we spent: ' + sum);
console.log('Which was our greatest expense: ' + Math.max(...expenses));
console.log('Which was our cheapest expense: ' + Math.min(...expenses));
console.log(
  'What was the average amount of our spendings: ' + sum / expenses.length
);

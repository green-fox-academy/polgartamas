// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

let numbers6: number[] = [3, 4, 5, 6, 7];
let sumOfNumbers6: any = numbers6;
console.log(numbers6);
console.log(numbers6.reduce((a, b) => a + b, 0));

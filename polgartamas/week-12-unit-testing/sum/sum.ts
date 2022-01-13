// Sum

//     Create a sum method in your class which has a list of integers as parameter
//     It should return the sum of the elements in the list
//     Follow these steps:
//         Add a new test case
//         Instantiate your class
//         create a list of integers
//         use the toEqual() matcher to test the result of the created sum method
//     Run it
//     Create different tests where you test your method with:
//         an empty list
//         a list that has one element in it
//         a list that has multiple elements in it
//     Run them
//     Fix your code if needed

export class NumbersSum {
  listOfNumbers: number[];

  constructor() {
    this.listOfNumbers = [];
  }
  add(numbers: number[]): void {
    for (let i in numbers) {
      this.listOfNumbers.push(numbers[i]);
    }
  }

  sum() {
    let sumOfNumbers: number = 0;
    for (let i = 0; i < this.listOfNumbers.length; i++) {
      sumOfNumbers += this.listOfNumbers[i];
    }
    return sumOfNumbers;
  }
}

const first = new NumbersSum();
let list1: number[] = [1, 2, 3];
first.add(list1);
console.log(first.sum());
console.log(first.listOfNumbers);

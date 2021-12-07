'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 },
];

export function listOfNames(students: any[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].candies > 4) {
      result.push(students[i].name);
    }
  }
  return result;
}

listOfNames(students);

export function sumOfAge(students: any[]): number {
  let sumOfAgeVariable: number = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].candies < 5) {
      sumOfAgeVariable += students[i].age;
    }
  }
  return sumOfAgeVariable;
}

sumOfAge(students);

// create a function called listOfNames() that takes a list of students and returns:
// - The name of students who have more than 4 candies

// create a function called sumOfAge() that takes a list of students and returns:
// - The sum of the age of people who have less than 5 candies

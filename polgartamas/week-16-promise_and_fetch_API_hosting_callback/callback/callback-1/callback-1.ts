'use strict';

const mapWith = (array: number[], callback: Function) => {
  let output = [];
  for (let num of array) {
    output.push(addOne(num));
  }

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
};

const addOne = (number: number) => {
  return number + 1;
};

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words: string[] = ['map', 'reduce', 'filter'];

const removeSecondLetter = (words: string[], callback: Function) => {
  let output: string[] = [];
  for (let word of words) {
    output.push(removeLetter(word));
  }
  return output;
};

const removeLetter = (word: string) => {
  let newWord: string = '';
  for (let i = 0; i < word.length; i += 2) {
    newWord += word[i];
  }
  return newWord;
};

console.log(removeSecondLetter(words, removeLetter));
// expected result: ['mp','rdc', 'fle']

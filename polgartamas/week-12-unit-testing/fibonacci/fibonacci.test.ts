import { countOneNumberOfFibonacciSequence } from './fibonacci';

describe('find one number from Fibonacci sequence based on an incoming index', () => {
  test('it should return a correct number on a given index', () => {
    expect(countOneNumberOfFibonacciSequence(5)).toEqual(5);
  });
  test('it should return a correct number on a given other index', () => {
    expect(countOneNumberOfFibonacciSequence(6)).toEqual(8);
  });
});

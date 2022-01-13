// Fibonacci

//     Write a function that computes a member of the fibonacci sequence by a given index
//     Create tests for multiple test cases.

export function countOneNumberOfFibonacciSequence(
  indexOfFibonacchiSequence: number
): number {
  let fibonacciSequence: number[] = [0, 1];
  for (let i = 2; i <= indexOfFibonacchiSequence; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1]);
  }
  return fibonacciSequence[indexOfFibonacchiSequence];
}
console.log(countOneNumberOfFibonacciSequence(6));

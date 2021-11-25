// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

export function sum(a: number): number {
  let sum = 0;
  for (let i = 0; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum(7));

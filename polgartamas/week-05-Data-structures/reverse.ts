'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

export function reverse(toBeReversed: string): string {
  return toBeReversed.split('').reverse().join('');
}
console.log(
  reverse(
    ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
  )
);

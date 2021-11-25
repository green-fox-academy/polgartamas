// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

let f: number = 5;
function calculateFactorial(f: number): number {
  let factorial: number = 1;
  for (let i = f; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(calculateFactorial(f));

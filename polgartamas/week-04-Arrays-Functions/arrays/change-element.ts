// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method
// -  Print the fourth element as a test

let numbers3: number[] = [1, 2, 3, 8, 5, 6];
let numbers4: number[] = numbers3.map((element: number, i: number) => {
  if (i === 3) {
    return 4;
  } else {
    return element;
  }
});
console.log(numbers4);

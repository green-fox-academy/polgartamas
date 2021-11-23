// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//
// - Print this two dimensional list to the output
let k = 4;
let matrix: string[][] = [];
matrix.push;
for (let i = 0; i < k; i++) {
  for (let j = 0; j < k; j++) {
    if (i === j) {
      console.log('1');
    } else {
      console.log('0');
    }
  }
}
console.log(matrix);

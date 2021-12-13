// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
export function countLines(fileName: string): number {
  try {
    const fileLines = fs.readFileSync(fileName, 'utf-8').split('\n');
    return fileLines.length;
  } catch (e) {
    return 0;
  }
}
console.log(countLines('my-file.txt'));

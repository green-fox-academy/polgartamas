// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyContent(fileFrom: string, fileTo: string): boolean {
  try {
    fs.copyFileSync(fileFrom, fileTo);
    return true;
  } catch (error) {
    return false;
  }
}
copyContent('from.txt', 'to.txt');

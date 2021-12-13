// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

const fs = require('fs');

function writeAString() {
  try {
    let fileContent = 'Tamás Polgár';
    fs.writeFileSync('my-file.txt', fileContent);
  } catch (e) {
    console.log('Unable to write file: my-file.txt');
  }
}
writeAString();

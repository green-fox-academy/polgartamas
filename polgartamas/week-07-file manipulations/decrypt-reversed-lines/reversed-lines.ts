// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

let fileContent = fs.readFileSync('reversed-lines.txt', 'utf-8');
console.log(fileContent);

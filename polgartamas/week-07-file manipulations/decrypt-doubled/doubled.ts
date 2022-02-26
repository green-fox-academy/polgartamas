// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

const fs = require('fs');

export function decryptDoubled(source: string): any {
  try {
    const fileContent: any = fs.readFileSync(source, 'utf-8');
    let contentByLines: any = fileContent.split('\n');
    let decryptedContent: string = '';
    for (let i = 0; i < contentByLines.length; i++) {
      for (let j = 0; j < contentByLines[i].length; j += 2) {
        decryptedContent += contentByLines[i][j];
      }
      decryptedContent += '\n';
      fs.writeFileSync('output.txt', decryptedContent);
    }
  } catch (error) {
    console.log('File not found');
  }
}

decryptDoubled('duplicated-chars.txt');

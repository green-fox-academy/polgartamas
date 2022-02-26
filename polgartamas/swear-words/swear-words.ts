// Swear words

// Write a method which can read and parse a file containing not so family
// friendly text. The method must remove all the given words from the file and
// return the amount of the removed words.

const fs = require('fs');

function counterOfSwearWords(listOfSwearWords: string[]): number {
  try {
    const fileContent: any = fs.readFileSync('swearwords.txt', 'utf-8');
    let contentByLines: string = fileContent.split('\n');
    let contentByWords: string[] = [];
    for (let i = 0; i < contentByLines.length; i++) {
      contentByWords.push(...contentByLines[i].toLowerCase().split(' '));
    }
    let swearWordsCounter: number = 0;
    for (let i = 0; i < contentByWords.length; i++) {
      for (let j = 0; j < listOfSwearWords.length; j++) {
        if (contentByWords[i].includes(',')) {
          contentByWords[i] = contentByWords[i].replace(',', '');
        }
        if (contentByWords[i].includes('.')) {
          contentByWords[i] = contentByWords[i].replace('.', '');
        }
        if (listOfSwearWords[j] === contentByWords[i]) {
          swearWordsCounter++;
        }
      }
    }
    return swearWordsCounter;
  } catch (error) {
    console.log('File not found');
  }
}
console.log(
  counterOfSwearWords([
    'fuck',
    'bloody',
    'cock',
    'shit',
    'fucker',
    'fuckstick',
    'asshole',
    'dick',
    'piss',
    'cunt',
  ])
);

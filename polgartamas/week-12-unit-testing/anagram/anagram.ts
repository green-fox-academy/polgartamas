// Anagram

//     Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//     Create a test for that.

export function anagramChecker(word1: string, word2: string): boolean {
  let word1SplittedAndSorted: string[] = word1
    .split('')
    .sort((a, b) => a.localeCompare(b));
  let word2SplittedAndSorted: string[] = word2
    .split('')
    .sort((a, b) => a.localeCompare(b));
  let equalCounter: number = 0;
  if (word1.length === word2.length) {
    for (let i in word1SplittedAndSorted) {
      if (word1SplittedAndSorted[i] === word2SplittedAndSorted[i]) {
        equalCounter++;
      } else {
        return false;
      }
    }
  }
  if (equalCounter === word1SplittedAndSorted.length) {
    return true;
  } else {
    return false;
  }
}
console.log(anagramChecker('étel', 'élet'));

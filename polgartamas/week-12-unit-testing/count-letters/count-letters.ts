// Count Letters

//     Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
//     Create a test for that.

export function letterCounter(text: string): {} {
  const letters: string[] = text.split('');
  let charactersMap: { [key: string]: number } = {};
  for (let character of letters) {
    // console.log(charactersMap);
    // console.log(character);
    if (charactersMap[character]) {
      charactersMap[character]++;
    } else {
      charactersMap[character] = 1;
    }
  }
  return charactersMap;
}

console.log(letterCounter(''));

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

//  Example
// console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

export function findUniqueItems(items: number[]): number[] {
  let uniqueItems: number[] = items.filter((n, i) => {
    //console.log(n, items.indexOf(n), i);
    return items.indexOf(n) === i;
  });
  return uniqueItems;
}

console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]));

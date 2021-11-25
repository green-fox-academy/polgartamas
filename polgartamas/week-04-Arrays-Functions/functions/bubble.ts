//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

//  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(items: number[]): number[] {
  return items.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else return 0;
  });
}
console.log(bubble([34, 12, 24, 9, 5]));

function advancedBubble(items: number[], k: boolean): number[] {
  {
    if (k === true) {
      return bubble(items).reverse();
    } else return bubble(items);
  }
}
console.log(advancedBubble([34, 12, 24, 9, 5], true));

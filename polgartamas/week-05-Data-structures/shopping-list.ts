// We are going to represent a shopping list in a list containing strings.

//     Create a list with the following items:
//         ˇ"eggs", "milk", "fish", "apples", "bread" and "chicken"
//     Create an application which prints out the answers to the following questions:
//         Do we have milk on the list?
//         Do we have bananas on the list?

let myList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];
console.log(myList);

let question = 'Do we have milk on the list?';
let splittedQuestion = question.split(' ');

let t = 'milk';
function finder() {
  for (let i = 0; i < myList.length; i++) {
    if (myList[i] === t) {
      console.log('yes');
    } else console.log('no');
  }
}
finder();

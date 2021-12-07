// List introduction 2

//     Create a list ('List A') which contains the following values

//     Apple, Avocado, Blueberries, Durian, Lychee

//     Create a new list ('List B') with the values of List A
//     Print out whether List A contains "Durian" or not
//     Remove "Durian" from List B
//     Add "Kiwifruit" to List A after the 4th element
//     Compare the size of List A and List B
//     Get the index of "Avocado" from List A
//     Get the index of "Durian" from List B
//     Add "Passion Fruit" and "Pomelo" to List B in a single statement
//     Print out the 3rd element from List A

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB = [...listA];
if (listA.includes('Durian')) {
  console.log(true);
} else console.log(false);
listB.splice(listB.indexOf('Durian'), 1);
console.log(listA);
console.log(listB);
let removed = listA.splice(4, 0, 'Kiwifruit');
console.log(listA);
console.log(listB);
if (listA.length !== listB.length) {
  console.log(false);
} else console.log(true);
console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));
listB.push('Passion Fruit', 'Pomelo');
console.log(listA);
console.log(listB);
console.log(listA[2]);

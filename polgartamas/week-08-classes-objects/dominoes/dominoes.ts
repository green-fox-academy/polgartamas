import { Domino } from './domino';

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(7, 1));
  dominoes.push(new Domino(6, 7));
  return dominoes;
}

function print(dominoes: Domino[]): void {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();

// for (let i = 0; i < dominoes.length; i++) {
//   let dominoesSorted:number[]=dominoes[0];
//   for (let j=0; j<dominoes.length; j++){
//   if ((dominoes[j].getValues()[1]) === (dominoes[j].getValues()[0])){
//   dominoesSorted=
// }
// }

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);
// console.log(dominoes);

let dominoesSorted: Domino[] = [];
dominoesSorted.push(dominoes[2]);

let i: number = 0;
while (dominoesSorted.length < dominoes.length) {
  if (
    dominoesSorted[dominoesSorted.length - 1].getValues()[1] ===
    dominoes[i].getValues()[0]
  ) {
    dominoesSorted.push(dominoes[i]);
  }
  if (i === dominoes.length - 1) {
    i = 0;
  } else {
    i++;
  }
}
console.log(dominoesSorted);

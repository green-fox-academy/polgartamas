import { timeStamp } from 'console';
import { Printable } from './printable';

class Domino implements Printable {
  dominoA: number;
  dominoB: number;

  constructor(dominoA: number, dominoB: number) {
    this.dominoA = dominoA;
    this.dominoB = dominoB;
  }

  printAllFields(): void {
    console.log(
      `Domino A side: ${this.dominoA}, Domino B side: ${this.dominoB}`
    );
  }
}

const newDomino = new Domino(3, 2);
newDomino.printAllFields();

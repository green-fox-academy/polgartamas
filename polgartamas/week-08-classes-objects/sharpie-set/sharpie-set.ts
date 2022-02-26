// Reuse your Sharpie class
// Create SharpieSet class
//     it contains a list of Sharpie, named listOfSharpies
//     it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
//     it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
//     it has a method that removes all unusable Sharpies: removeTrash()

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use(): void {
    this.inkAmount = this.inkAmount - 10;
  }

  getInkAmount(): number {
    return this.inkAmount;
  }
}

const blue = new Sharpie('blue', 50);
const red = new Sharpie('red', 50);
const green = new Sharpie('green', 50);
const yellow = new Sharpie('yellow', 50);

export class SharpieSet {
  listOfSharpies: Sharpie[];

  constructor() {
    this.listOfSharpies = [];
  }

  add(sharpie: Sharpie): void {
    this.listOfSharpies.push(sharpie);
  }

  countUsable(): number {
    let counter = 0;
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].inkAmount > 0) {
        counter++;
      }
    }
    return counter;
  }

  removeTrash(): void {
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].inkAmount <= 0) {
        delete this.listOfSharpies[i];
      }
    }
  }

  getListOfSharpies(): void {
    console.log(this.listOfSharpies);
  }
}

const box = new SharpieSet();
box.add(blue);
box.add(red);
box.add(green);
box.add(yellow);
console.log(box.listOfSharpies);
box.countUsable();
console.log(box.countUsable());
blue.use();
blue.use();
blue.use();
blue.use();
blue.use();
blue.use();
blue.use();
blue.use();
blue.use();
blue.use();
box.countUsable();
console.log(box.countUsable());
box.removeTrash();
box.listOfSharpies;

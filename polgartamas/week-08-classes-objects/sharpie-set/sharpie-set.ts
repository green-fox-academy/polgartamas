// Reuse your Sharpie class
// Create SharpieSet class
//     it contains a list of Sharpie, named listOfSharpies
//     it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
//     it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
//     it has a method that removes all unusable Sharpies: removeTrash()

class Sharpie {
  name: string;
  color: string;
  width: number;
  inkAmount: number;

  constructor(name: string, color: string, width: number) {
    this.name = name;
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  decreaseInkAmount(): void {
    this.inkAmount = this.inkAmount - 10;
  }

  printSharpieInkAmount(): void {
    if (this.inkAmount > 0) {
      console.log(this.inkAmount);
    } else {
      console.log('empty');
    }
  }
}

const blue = new Sharpie('Blue', 'blue', 50);
const red = new Sharpie('Red', 'red', 50);
const green = new Sharpie('Green', 'green', 50);
const yellow = new Sharpie('Yellow', 'yellow', 50);

class SharpieSet {
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
}

const box = new SharpieSet();
box.add(blue);
box.add(red);
box.add(green);
box.add(yellow);
console.log(box.listOfSharpies);
box.countUsable();
console.log(box.countUsable());
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.decreaseInkAmount();
blue.printSharpieInkAmount();
box.countUsable();
console.log(box.countUsable());
box.removeTrash();
console.log(box.listOfSharpies);

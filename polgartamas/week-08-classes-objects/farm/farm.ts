// Farm

//     Reuse your Animal class
//     Create a Farm class
//         it has a list of Animals listOfAnimals
//         it has a limit that defines how many animals can be kept in the Farm and can be set when the Farm is created
//         it has two methods:
//             breed() -> creates a new animal if there's place for it
//             sell() -> removes the least hungry animal

export class Animal {
  name: string;
  hunger: number;
  thirst: number;

  constructor(name: string) {
    this.name = name;
    this.hunger = 50;
    this.thirst = 50;
  }
  eat(): void {
    this.hunger--;
  }
  drink(): void {
    this.thirst--;
  }
  play(): void {
    this.hunger++ && this.thirst++;
  }

  printHungerAndThirst(): void {
    console.log(this.hunger, this.thirst);
  }

  getHunger(): number {
    return this.hunger;
  }

  getThirst(): number {
    return this.thirst;
  }
}

export class Farm {
  listOfAnimals: Animal[];
  limit: number;

  constructor(limit: number) {
    this.listOfAnimals = [];
    this.limit = limit;
  }

  breed(animal: Animal): void {
    if (this.listOfAnimals.length < this.limit) {
      this.listOfAnimals.push(animal);
    } else {
      console.log('There is no place for a new animal.');
    }
  }

  getListOfAnimals(): void {
    console.log(this.listOfAnimals);
  }

  getLimit(): number {
    return this.limit;
  }

  sell(): void {
    let i: number;
    while (i < this.listOfAnimals.length) {
      this.listOfAnimals = this.listOfAnimals[i]
        .getHunger()
        .sort((a: number, b: number) => {
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          } else return 0;
        });
      i++;
    }
  }
}

let dog = new Animal('dog');
let cat = new Animal('cat');
let horse = new Animal('horse');
let farm1 = new Farm(3);
farm1.breed(dog);
farm1.breed(cat);
farm1.breed(horse);
console.log(farm1);

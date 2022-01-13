// The Garden Application

import { toNamespacedPath } from 'path/posix';

// The task is to create a garden application, so in your main method you should create a garden with flowers and trees. The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange). After creating these plants you should show the user how the garden looks like. After that the program should water the garden twice, first with the amount of 40 then with 70. After every watering the user should see the state of the garden as you can see in the output below:

// The yellow Flower needs water
// The blue Flower needs water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 40
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 70
// The yellow Flower doesn't need water
// The blue Flower doesn't need water
// The purple Tree doesn't need water
// The orange Tree doesn't need water

// Information on the elements

//     The Garden
//         is able to hold unlimited amount of flowers and trees
//         when watering it should only water those plants that need water with equally divided amount amongst them
//         eg. watering with 40 and 4 of them need water then each gets watered with 10
//     The Flower
//         needs water if its current water amount is less than 5
//         when watered the flower can only absorb 75% of the water
//         eg. watering with 10 the flower's amount of water should only increase by 7.5
//     The Tree
//         needs water if its current water amount is less than 10
//         when watered the tree can only absorb the 40% of the water
//         eg. watering with 10 the tree's amount of water should only increase by 4

class Plants {
  name: string;
  waterLevel: number = 0;

  constructor(name: string, waterLevel: number = 0) {
    this.name = name;
    this.waterLevel = waterLevel;
  }
}

class Flower extends Plants {
  thirstyLimit: number;
  absorbPercent: number;

  constructor(
    name: string,
    waterLevel: number = 0,
    thirstyLimit: number = 5,
    absorbPercent: number = 0.75
  ) {
    super(name, waterLevel);
    this.thirstyLimit = thirstyLimit;
    this.absorbPercent = absorbPercent;
  }
}

class Tree extends Plants {
  thirstyLimit: number;
  absorbPercent: number;

  constructor(
    name: string,
    waterLevel: number = 0,
    thirstyLimit: number = 10,
    absorbPercent: number = 0.4
  ) {
    super(name, waterLevel);
    this.thirstyLimit = thirstyLimit;
    this.absorbPercent = absorbPercent;
  }
}

class Garden {
  name: string;
  listOfFlowers: Flower[];
  listOfTrees: Tree[];

  constructor(name: string) {
    this.name = name;
    this.listOfFlowers = [];
    this.listOfTrees = [];
  }

  addFlower(flower: Flower): void {
    this.listOfFlowers.push(flower);
  }

  addTree(tree: Tree): void {
    this.listOfTrees.push(tree);
  }

  showGarden(): void {
    console.log(this.listOfFlowers);
    console.log(this.listOfTrees);
  }

  showGardenAndThirsty(): void {
    for (let i = 0; i < this.listOfFlowers.length; i++) {
      if (
        this.listOfFlowers[i].waterLevel < this.listOfFlowers[i].thirstyLimit
      ) {
        console.log(`The ${this.listOfFlowers[i].name} Flower needs water`);
      } else {
        console.log(
          `The ${this.listOfFlowers[i].name} Flower doesn't need water`
        );
      }
    }
    for (let i = 0; i < this.listOfTrees.length; i++) {
      if (this.listOfTrees[i].waterLevel < this.listOfTrees[i].thirstyLimit) {
        console.log(`The ${this.listOfTrees[i].name} Tree needs water`);
      } else {
        console.log(`The ${this.listOfTrees[i].name} Tree doesn't need water`);
      }
    }
    console.log('\n');
  }

  watering(): void {
    console.log('Watering with 40');
    let firstWater: number = 40;
    for (let i = 0; i < this.listOfFlowers.length; i++) {
      this.listOfFlowers[i].waterLevel =
        this.listOfFlowers[i].waterLevel +
        (firstWater / (this.listOfFlowers.length + this.listOfTrees.length)) *
          this.listOfFlowers[i].absorbPercent;
    }
    for (let i = 0; i < this.listOfTrees.length; i++) {
      this.listOfTrees[i].waterLevel =
        this.listOfTrees[i].waterLevel +
        (firstWater / (this.listOfFlowers.length + this.listOfTrees.length)) *
          this.listOfTrees[i].absorbPercent;
    }

    this.showGardenAndThirsty();
    console.log('Watering with 70');
    let secondWater: number = 70;
    for (let i = 0; i < this.listOfFlowers.length; i++) {
      this.listOfFlowers[i].waterLevel =
        this.listOfFlowers[i].waterLevel +
        (secondWater / (this.listOfFlowers.length + this.listOfTrees.length)) *
          this.listOfFlowers[i].absorbPercent;
    }
    for (let i = 0; i < this.listOfTrees.length; i++) {
      this.listOfTrees[i].waterLevel =
        this.listOfTrees[i].waterLevel +
        (secondWater / (this.listOfFlowers.length + this.listOfTrees.length)) *
          this.listOfTrees[i].absorbPercent;
    }
    this.showGardenAndThirsty();
  }
}

let yellow = new Flower('yellow');
let blue = new Flower('blue');
let purple = new Tree('purple');
let orange = new Tree('orange');
let myGarden = new Garden('My garden');
myGarden.addFlower(yellow);
myGarden.addFlower(blue);
myGarden.addTree(purple);
myGarden.addTree(orange);
myGarden.showGarden();
myGarden.showGardenAndThirsty();
myGarden.watering();
myGarden.showGarden();

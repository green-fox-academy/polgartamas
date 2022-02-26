// Create an Animal class

//     Every animal has a hunger value, which is a whole number
//     Every animal has a thirst value, which is a whole number
//     When creating a new animal instance these values must be set to the default 50 value
//     Every animal can eat() which decreases its hunger by one
//     Every animal can drink() which decreases its thirst by one
//     Every animal can play() which increases both its hunger and thirst by one

'use strict';

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
}

let dog = new Animal('dog');
dog.eat();
dog.printHungerAndThirst();
dog.play();
dog.printHungerAndThirst();

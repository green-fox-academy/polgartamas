import { Flyable } from './flyable';

class Animal {
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

class Bird extends Animal implements Flyable {
  land(): void {
    console.log('I can land');
  }
  fly(): void {
    console.log('I can fly');
  }

  takeOff(): void {
    console.log('I can make takeOff');
  }
}

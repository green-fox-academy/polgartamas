import { Animal } from './animal';

export class Bird extends Animal {
  constructor(
    name: string,
    age?: number,
    isItPredator?: boolean,
    gender?: string
  ) {
    super(name, age, isItPredator, gender);
  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return 'laying eggs.';
  }
}

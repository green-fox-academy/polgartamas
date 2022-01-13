//     Create a Flyable interface
//     it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
//     it should have at least 3 fields
// Extend Helicopter class from Vehicle
//     implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
//     implement your Flyable interface

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  name: string;
  color: string;
  numberOfWheels: number;
  constructor(name: string, color: string, numberOfWheels: number) {
    this.name = name;
    this.color = color;
    this.numberOfWheels = numberOfWheels;
  }
}

class Helicopter extends Vehicle implements Flyable {
  constructor(name: string, color: string, numberOfWheels: number) {
    super(name, color, numberOfWheels);
  }
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
export { Flyable };

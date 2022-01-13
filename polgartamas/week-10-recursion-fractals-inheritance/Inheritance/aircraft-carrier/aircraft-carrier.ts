// Aircraft Carrier
// Aircrafts

import { Z_FULL_FLUSH } from 'zlib';

//     Create a class that represents an aircraft
//     There are 2 types of aircrafts: F16 and F35
//     Both aircrafts should keep track of their ammunition

// F16

//     Max ammo: 8
//     Base damage: 30

// F35

//     Max ammo: 12
//     Base damage: 50

// All aircrafts should be created with an empty ammo storage
// Methods
// fight()

//     It should use all the ammo (set it to 0) and it should return the damage it causes
//         damage is calculated by multiplying the base damage by the ammunition

// refillAmmo()

//     It should take a number as parameter that represents the ammunition coming from a station
//     Increase the ammo of the aircraft by the right amount
//     It can't have more ammo than the parameter value or the max ammo of the aircraft
//     It should return the remaining (unused) ammo
//     Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288

// getType()

//     It should return the type of the aircraft as a string

// getStatus()

//     It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500

// isPriority()

//     It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16

// Carrier

// Create a class that represents an aircraft-carrier

//     The carrier should be able to store aircrafts
//     Each carrier should have a store of ammo represented by a number
//     The initial ammo should be given as a constructor parameter
//     The carrier also has a health point which is also given as a constructor parameter

// Methods
// add()

//     It should take a new aircraft and add it to its storage

// fill()

//     It should fill all the aircrafts with ammo and su

//     btract the taken ammo from the ammo storage
//     If there is not enough ammo it should start to fill the aircrafts that are priority first
//     It should throw an exception if there is no ammo when this method is called

// fight()

//     It should take another carrier as a reference parameter and
//         fire all the ammo from the aircrafts to it
//         subtract all the damage from the other carrier's health points

// getStatus()

// It should return a string describing its, and all of its aircrafts' statuses in the following format:

// HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240

// If the health points are 0 then it should return: It's dead Jim :(

class Aircraft {
  type: string;
  ammo: number;
  maxAmmo: number;
  baseDamage: number;
  allDamage: number;

  constructor(
    type: string = '',
    ammo: number = 0,
    maxAmmo: number = 0,
    baseDamage: number = 0,
    allDamage: number = 0
  ) {
    this.type = type;
    this.ammo = ammo;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.allDamage = allDamage;
  }
  fight(): number {
    this.allDamage = this.baseDamage * this.ammo;
    this.ammo = 0;
    return this.allDamage;
  }

  refillAmmo(refillNumber: number): number {
    const refill: number = this.maxAmmo - this.ammo;
    this.ammo = this.ammo + refill;
    return refillNumber - refill;
  }

  getType(): void {
    console.log(this.type);
  }

  getStatus(): void {
    console.log(
      `Type: ${this.type}, Ammo: ${this.ammo}, Base damage: ${this.baseDamage}, All damage: ${this.allDamage}`
    );
  }

  isPriority(): boolean {
    if (this.type === 'F35') {
      return true;
    } else if (this.type === 'F16') {
      return false;
    }
  }
}

class F16 extends Aircraft {
  constructor(
    type: string = 'F16',
    ammo: number = 0,
    maxAmmo: number = 8,
    baseDamage: number = 30,
    allDamage: number = 0
  ) {
    super(type, ammo, maxAmmo, baseDamage, allDamage);
  }
}

class F35 extends Aircraft {
  constructor(
    type: string = 'F35',
    ammo: number = 0,
    maxAmmo: number = 12,
    baseDamage: number = 50,
    allDamage: number = 0
  ) {
    super(type, ammo, maxAmmo, baseDamage, allDamage);
  }
}

class Carrier {
  allAircraft: Aircraft[];
  ammoStorage: number;
  healthPoint: number;
  allDamage: number;

  constructor(ammoStorage: number = 2000, healthPoint: number = 4000) {
    this.allAircraft = [];
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
    this.allDamage = 0;
  }

  add(aircraft: Aircraft): void {
    this.allAircraft.push(aircraft);
  }

  fill(): void {
    let allAmmoNeeds = 0;
    for (let i = 0; i < this.allAircraft.length; i++) {
      allAmmoNeeds = this.allAircraft[i].maxAmmo - this.allAircraft[i].ammo;
    }
    if (allAmmoNeeds <= this.ammoStorage) {
      for (let i = 0; i < this.allAircraft.length; i++) {
        this.allAircraft[i].ammo =
          this.allAircraft[i].ammo +
          (this.allAircraft[i].maxAmmo - this.allAircraft[i].ammo);
      }
    } else if (allAmmoNeeds > this.ammoStorage && 0 < this.ammoStorage) {
      for (let i = 0; i < this.allAircraft.length; i++)
        if (this.allAircraft[i].isPriority() === true) {
          this.allAircraft[i].ammo =
            this.allAircraft[i].ammo +
            (this.allAircraft[i].maxAmmo - this.allAircraft[i].ammo);
        }
    } else {
      console.log('There is not enough ammo in the storage!');
    }
  }

  fight(anotherCarrierName: string, healhPointOfEnemy: number): void {
    for (let i = 0; i < this.allAircraft.length; i++) {
      healhPointOfEnemy =
        healhPointOfEnemy -
        this.allAircraft[i].ammo * this.allAircraft[i].baseDamage;
    }
    for (let i = 0; i < this.allAircraft.length; i++) {
      this.allDamage =
        this.allDamage +
        this.allAircraft[i].ammo * this.allAircraft[i].baseDamage;
    }
    for (let i = 0; i < this.allAircraft.length; i++) {
      this.allAircraft[i].allDamage =
        this.allAircraft[i].allDamage +
        this.allAircraft[i].ammo * this.allAircraft[i].baseDamage;
      this.allAircraft[i].ammo = 0;
    }
    console.log(
      `After fight, this is the remaining health points of ${anotherCarrierName}:`,
      healhPointOfEnemy,
      '\n'
    );
  }

  getStatus(): void {
    console.log(
      `HP: ${this.healthPoint}, All aircraft: ${this.allAircraft.length}, Ammo storage: ${this.ammoStorage}, Total damage: ${this.allDamage}`
    );
    console.log('Aircrafts:');
    for (let i = 0; i < this.allAircraft.length; i++) {
      console.log(
        `Type: ${this.allAircraft[i].type}, Ammo: ${this.allAircraft[i].ammo}, Base damage: ${this.allAircraft[i].baseDamage}, All damage: ${this.allAircraft[i].allDamage}`
      );
    }
    console.log('\n');
  }
}

let alpha = new F16();
let beta = new F16();
let gamma = new F35();
let delta = new F35();
let hammer = new Aircraft('Hammer');
let thor = new Carrier();
thor.add(alpha);
thor.add(beta);
thor.add(gamma);
thor.add(delta);
thor.getStatus();
thor.fill();
thor.getStatus();
thor.fight('Loki', 5000);
thor.getStatus();
thor.fill();
thor.getStatus();
thor.fight('Hella', 2000);

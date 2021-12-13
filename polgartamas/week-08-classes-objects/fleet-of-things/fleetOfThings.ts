import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

const getMilk = new Thing('Get milk');
fleet.add(getMilk);
const remove = new Thing('Remove the obstacles');
fleet.add(remove);
const standUp = new Thing('Stand up');
standUp.complete();
standUp.getCompleted();
standUp.toString();
fleet.add(standUp);
const eatLunch = new Thing('Eat lunch');
eatLunch.complete();
eatLunch.getCompleted;
eatLunch.toString();
fleet.add(eatLunch);
console.log(fleet.toString());

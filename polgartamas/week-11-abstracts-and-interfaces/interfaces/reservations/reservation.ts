import { Reservationy } from './reservationy';

class Reservation implements Reservationy {
  name: string;
  listOfReservations: Reservation[];

  constructor(name: string) {
    this.name = name;
    this.listOfReservations = [];
  }
  getDowBooking(): string {
    let days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let result: string;
    for (let i = 0; i < days.length; i++) {
      result = days[Math.floor(Math.random() * days.length)];
    }
    return result;
  }
  getCodeBooking(): string {
    let length: number = 8;
    let result: string;
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  addReservations(reservation: Reservation): void {
    this.listOfReservations.push(reservation);
  }

  printAllReservations(): void {
    for (let i = 0; i < this.listOfReservations.length; i++) {
      console.log(`Booking# ${this.getCodeBooking} for ${this.getDowBooking}`);
    }
  }
}

const first = new Reservation('first');
first.getCodeBooking;
first.getDowBooking;
first.addReservations;
first.printAllReservations;
console.log(first);

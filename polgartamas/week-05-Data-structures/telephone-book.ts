// We are going to represent our contacts in a map where both the keys and values are strings.

//     Create a map with the following key-value pairs:
//     Name (key) 	Phone number (value)
//     William A. Lathan 	405-709-1865
//     John K. Miller 	402-247-8568
//     Hortensia E. Foster 	606-481-6467
//     Amanda D. Newland 	319-243-5613
//     Brooke P. Askew 	307-687-2982

//     Create an application which prints out the answers to the following questions:
//         What is John K. Miller's phone number?
//         Whose phone number is 307-687-2982?
//         Do we know Chris E. Myers' phone number?

let phoneBook: any = {
  'William A. Lathan': '405 - 709 - 1865',
  'John K. Miller': '402 - 247 - 8568',
  'Hortensia E. Foster': '606 - 481 - 6467',
  'Amanda D. Newland': '319 - 243 - 5613',
  'Brooke P. Askew': '307 - 687 - 2982',
};
console.log(phoneBook);
//console.log("John K. Miller's phone number is: " + phoneBook['John K. Miller']);
let phoneBookNames = Object.keys(phoneBook);
let phoneBookNumbers = Object.values(phoneBook);
console.log(phoneBookNames);
console.log(phoneBookNumbers);
let z = 'John K. Miller';
function getNumber() {
  for (let i = 0; i < phoneBookNames.length; i++) {
    if (z === phoneBookNames[i]) {
      return phoneBook[phoneBookNames[i]];
    }
  }
}
console.log(getNumber());

// let t = '307-687-2982';
// function getName() {
//   return Object.keys(phoneBook)[Object.values(phoneBook).indexOf(t)];
// }

// console.log(getName());

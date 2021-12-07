let names: string[] = [];
console.log(names.length);
names.push('William');
console.log(names);
names.push('John');
names.push('Amanda');
console.log(names.length);
console.log(names[2]);
console.log(names);
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
for (let i = 0; i < names.length; i++) {
  console.log(i + 1 + '. ' + names[i]);
}
//console.log(names);
let names2 = names.splice(1, 1);
console.log(names);
let names3 = names.splice(0, 2);
console.log(names);

// We are going to play with maps. Feel free to use the built-in methods where possible.
//     Create an empty map where the keys are integers and the values are characters
//     Print out whether the map is empty or not

//     Add the following key-value pairs to the map
//     Key 	Value
//     97 	a
//     98 	b
//     99 	c
//     65 	A
//     66 	B
//     67 	C

//     Print all the keys

//     Print all the values

//     Add value D with the key 68

//     Print how many key-value pairs are in the map

//     Print the value that is associated with key 99

//     Remove the key-value pair where with key 97

//     Print whether there is an associated value with key 100 or not

//     Remove all the key-value pairs

let newMap: any = {};
console.log(newMap);

newMap = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C',
};
console.log(Object.keys(newMap));
console.log(Object.values(newMap));
newMap['68'] = 'D';
console.log(newMap);
console.log(Object.keys(newMap).length);
console.log(Object.values(newMap).length);
console.log(newMap[99]);
delete newMap[97];
console.log(newMap);
console.log(newMap[100]);
delete newMap[65];
delete newMap[66];
delete newMap[67];
delete newMap[68];
delete newMap[98];
delete newMap[99];
console.log(newMap);

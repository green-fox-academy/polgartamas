// -  Create an array variable named `animals`
//    with the following content:
//    `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
//      "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// -  Add all elements an `"a"` at the end

let animals: string[] = [
  'koal',
  'pand',
  'zebr',
  'anacond',
  'bo',
  'chinchill',
  'cobr',
  'gorill',
  'hyen',
  'hydr',
  'iguan',
  'impal',
  'pum',
  'tarantul',
  'pirahn',
];
let animals1: string[] = animals.map((element: string, i: number) => {
  return element + 'a';
});
console.log(animals1);

'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
//todoText = "".concat('My todo:\n', todoText);
todoText = 'My todo:\n'.concat(todoText);
todoText = todoText.concat(' - Download games\n');
todoText = todoText.concat(' -   Diablo');
console.log(todoText);

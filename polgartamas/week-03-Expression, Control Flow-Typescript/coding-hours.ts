'use strict';
let myCodehours = 6;
let mySemester = 17;
let myWorkingdays = 5;
let myAvarege = 52;
let myAll = myCodehours*mySemester*myWorkingdays;
let myPercentage = (((myAll/(myAvarege*mySemester))*100).toFixed(2)+"%");
console.log(myAll);
console.log(myPercentage);

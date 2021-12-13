// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function divideNumber(divPar: number) {
  let result: number = 10 / divPar;
  if (divPar === 0) {
    return 'fail';
  } else {
    return result;
  }
}
console.log(divideNumber(5));

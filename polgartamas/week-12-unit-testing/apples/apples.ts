// Apples

//     Create a class with one method (eg. getApple()) that returns a string (eg. 'apple')
//     Create a test for that:
//         Create a test file
//         Create a test method
//         Instantiate an Object from your class in the method
//         Use the toEqual() matcher
//         The expected parameter should be the same string (eg. 'apple')
//         The actual parameter should be the return value of the method (eg. myobject.getApple())
//     Run the test
//     Change the expected value to make the test failing
//     Run the test
//     Fix the returned value to make the test succeeding again

export class Apples {
  name: string;

  constructor() {
    this.name = '';
  }
  getApple(): string {
    return 'apple';
  }
}
const apple = new Apples();
apple.getApple();

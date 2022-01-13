import { Apples } from './apples';

test('it should print apple', () => {
  const apple = new Apples();
  expect(apple.getApple()).toEqual('apple');
});

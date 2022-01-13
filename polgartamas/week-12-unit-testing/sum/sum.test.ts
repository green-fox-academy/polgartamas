import { NumbersSum } from './sum';

describe('sum function', () => {
  test('adding numbers correctly', () => {
    const first = new NumbersSum();
    let list1: number[] = [1, 2, 3];
    first.add(list1);
    expect(first.sum()).toEqual(6);
  });
  test('if the list is empty', () => {
    const first = new NumbersSum();
    let list1: number[] = [];
    first.add(list1);
    expect(first.sum()).toEqual(0);
  });
  test('if there is one number in the list', () => {
    const first = new NumbersSum();
    let list1: number[] = [20];
    first.add(list1);
    expect(first.sum()).toEqual(20);
  });
  test('if the list contains multiple numbers', () => {
    const first = new NumbersSum();
    let list1: number[] = [200, 200, 300, 300];
    first.add(list1);
    expect(first.sum()).toEqual(1000);
  });
});

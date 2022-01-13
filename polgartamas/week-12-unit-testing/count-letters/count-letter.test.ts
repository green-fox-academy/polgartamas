import { letterCounter } from './count-letters';

describe('test of a letter counter method', () => {
  test('should create an object with the correct list of letters and their occurrences', () => {
    expect(letterCounter('eett')).toEqual({ e: 2, t: 2 });
  });
  test('if the parameter is empty, it should return an empty object', () => {
    expect(letterCounter('')).toEqual({});
  });
});

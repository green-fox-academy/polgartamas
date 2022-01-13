import { anagramChecker } from './anagram';

describe('anagram function', () => {
  test('return true if the parameters are anagrams', () => {
    expect(anagramChecker('étel', 'élet')).toEqual(true);
  });
  test('return false if the parameters are not anagrams', () => {
    expect(anagramChecker('étel', 'élek')).toEqual(false);
  });
  test('return false if the lengths of the parameters are not equal', () => {
    expect(anagramChecker('étel', 'kétely')).toEqual(false);
  });
});

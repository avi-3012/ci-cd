// Simple unit test example
import { test, expect, describe } from '@jest/globals';
describe('Basic Math Test', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(1 + 2).toBe(3);
    });
  
    test('multiplies 3 * 4 to equal 12', () => {
      expect(3 * 4).toBe(12);
    });
  });
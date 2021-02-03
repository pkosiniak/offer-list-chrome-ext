import { deepCompare } from '../deepCompare';

const object1 = {
   primitive: 'string',
   array: [
      'a',
      'b',
   ],
};

const object2 = {
   primitive: 'string',
   array: [
      'a',
      'b',
   ],
};

const object3 = {
   primitive: 'string',
   array: [
      'a',
      'c',
   ],
};

describe('deepCompare', () => {
   test('return true when objects are the same', () => {
      expect(deepCompare(object1, object2)).toBeTruthy();
   });
   test('return false when objects are not the same', () => {
      expect(deepCompare(object1, object3)).toBeFalsy();
   });
});
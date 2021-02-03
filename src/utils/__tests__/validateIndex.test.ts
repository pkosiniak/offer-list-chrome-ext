import { validateIndex, indexValidator } from '../validateIndex';

describe('validateIndex', () => {
   describe('should return true if index is number and is equal or greater then 0', () => {
      it('should return true', () => {
         expect(validateIndex(0)).toBeTruthy();
      });
      it('should return false', () => {
         expect(validateIndex(-1)).toBeFalsy();
      });
      it('should return false - Null case', () => {
         expect(validateIndex(null)).toBeFalsy();
      });
      it('should return false - string case', () => {
         expect(validateIndex('1')).toBeFalsy();
      });
   });
});

describe('indexValidator', () => {
   describe('should return array with index as numer, and validateIndex result', () => {
      it('should return index >= 0 and true in array', () => {
         expect(indexValidator(0)).toMatchObject<[number, boolean]>([0, true]);
      });
      it('should return number representation of index, and true', () => {
         expect(indexValidator('0')).toMatchObject<[number, boolean]>([0, true]);
      });
      it('should return number representation of index, and false', () => {
         expect(indexValidator(-1)).toMatchObject<[number, boolean]>([-1, false]);
         expect(indexValidator('-1')).toMatchObject<[number, boolean]>([-1, false]);
      });
      it('should return number (NaN) and false array', () => {
         expect(indexValidator(null)).toMatchObject<[number, boolean]>([NaN, false]);
         expect(indexValidator(true)).toMatchObject<[number, boolean]>([NaN, false]);
         expect(indexValidator([])).toMatchObject<[number, boolean]>([NaN, false]);
         expect(indexValidator('null')).toMatchObject<[number, boolean]>([NaN, false]);
         expect(indexValidator('false')).toMatchObject<[number, boolean]>([NaN, false]);
      });
   });
});
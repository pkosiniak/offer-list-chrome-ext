import { replaceItemAtIndex, deleteItemAtIndex } from '../arrayReplaceRemove';

describe('arrayReplaceRemove as already tested', () => {
   it('should work', () => {
      expect(replaceItemAtIndex([1, 2, 3], 1, 4)).toStrictEqual([1, 4, 3]);
   });
   it('should work', () => {
      expect(deleteItemAtIndex([1, 2, 3], 1)).toStrictEqual([1, 3]);
   });
});
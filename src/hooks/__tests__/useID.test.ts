import { testHook } from '../../test/testHook';
import { useID } from '../useID';

describe('useID hook', () => {
   it('should return unique ID', () => {
      const ID = testHook(useID, {});
      const UID = testHook(useID, {});
      expect(UID).toBeTruthy();
      expect(UID).not.toBe(ID);
   });
   it('should not return unique ID with given id', () => {
      const ID = testHook(useID, { id: 'ID' });
      const ID2 = testHook(useID, { id: 'ID' });
      expect(ID2).toBe(ID);
   });
   it('should return unique ID with given name', () => {
      const ID = testHook(useID, { prefix: 'custom' });
      const UID = testHook(useID, { prefix: 'custom' });
      expect(UID).toBeTruthy();
      expect(UID).not.toBe(ID);
   });
   it('should return unique ID 1000 times', () => {
      const ids = [];
      for (let i = 0; i < 1000; i++) {
         ids.push(testHook(useID, {}));
      }
      const UID = testHook(useID, {});
      expect(ids.find(id => id === UID)).toBeFalsy();
   });
   // PERFORMANCE REASON
   it.skip('should return unique ID 10000 times', () => {
      const ids = [];
      for (let i = 0; i < 10000; i++) {
         ids.push(testHook(useID, {}));
      }
      const UID = testHook(useID, {});
      expect(ids.find(id => id === UID)).toBeFalsy();
   });
});
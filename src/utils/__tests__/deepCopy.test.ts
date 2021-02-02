import { deepCopy } from '../deepCopy';

type ObjectType = {
   primitive: string;
   array: string[];
   object: {
      primitive: number;
   };
}


let object: ObjectType;


describe('deepCopy', () => {
   beforeEach(() => {
      object = {
         primitive: '0',
         array: [
            '1',
            '2',
         ],
         object: {
            primitive: 1,
         },
      };
   });

   it('should return exact copy', () => {
      expect(deepCopy(object)).toMatchObject<ObjectType>(object);
   });

   it('should not match if copied object change', () => {
      const expected = deepCopy(object);
      expected.primitive = 'new';
      expect(expected).not.toMatchObject<ObjectType>(object);
   });

   it('should not match if copied object change deeply', () => {
      const expected = deepCopy(object);
      expected.object.primitive = 0;
      expect(expected).not.toMatchObject<ObjectType>(object);
   });
});
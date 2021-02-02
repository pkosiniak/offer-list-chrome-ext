export const validateIndex = <T>(
   index: T | number,
): boolean => typeof index === 'number' && index >= 0;

export const indexValidator = <T>(
   index: T | number,
): [number, boolean] => {
   const validate = typeof index === 'number' || typeof index === 'string'
      ? +index
      : NaN;

   return [validate, validateIndex(validate)];
};
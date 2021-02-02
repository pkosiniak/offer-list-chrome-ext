export const validateIndex = <T>(
   index: T | number,
): boolean => typeof index === 'number' && index >= 0;

export const indexValidator = <T>(
   index: T | number,
): [ number, boolean] => [+index, validateIndex(index) ];
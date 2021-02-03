export const replaceItemAtIndex = <T>(
   arr: T[], index: number, newValue: T,
) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

export const deleteItemAtIndex = <T>(
   arr: T[], index: number,
) => [...arr.slice(0, index), ...arr.slice(index + 1)];
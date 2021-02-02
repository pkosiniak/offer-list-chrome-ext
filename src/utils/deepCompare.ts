export const deepCompare = <T>(a: T, b: T) => JSON.stringify(a) === JSON.stringify(b);
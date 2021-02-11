export const color = {
   react: '#282c34',
   link: '#8f8fef',
   active: '#ef8f8f',
   visited: '#c18fef',
   linkLight: '#9f9fdf',
   activeLight: '#df9f9f',
   visitedLight: '#b89fd0',
   white: '#fff',
   lightest: '#eee',
   lighter: '#ccc',
   light: '#aaa',
   grayLight: '#888',
   gray: '#666',
   grayDark: '#555',
   dark: '#444',
   darker: '#333',
   darkest: '#222',
   black: '#000',
};

const keys = Object.keys(color);
const values = Object.values(color);

type ColorAlpha = {[K in keyof typeof color]: (alpha: string) => string}

export const Color: ColorAlpha = Object.fromEntries(
   keys.map((key, index) => [
      key,
      (alpha: string) => values[index] + alpha,
   ]),
) as ColorAlpha; 
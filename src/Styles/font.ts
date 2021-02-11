import { css } from 'styled-components';
import { color as C } from './color';

const fontCss = (size: number) => css`
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-size: ${size}px;
`;

export const font = {
   medium: fontCss(16),
};

export const textShadow = (
   width: number = 1,
   color: string = C.black,
) => css`
   text-shadow: 
   -${width}px 0 ${width}px ${color}, 
   0 ${width}px ${width}px ${color}, 
   ${width}px 0 ${width}px ${color}, 
   0 -${width}px ${width}px ${color};
`;
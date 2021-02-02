import { css } from 'styled-components';

const fontCss = (size: number) => css`
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-size: ${size}px;
`;


export const font = {
   medium: fontCss(16),
};
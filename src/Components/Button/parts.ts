import styled from 'styled-components';
import { color } from '../../Styles/color';
import { border, themeWithBorder } from '../../Styles/theme';

export interface StyledButtonProps {
   isVisible?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
   /* background-color: ${color.darker};
   color: ${color.lightest};
   ${border} */
   ${themeWithBorder.darker}
   visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
   padding: 8px 12px;
   text-transform: uppercase;
   display: flex;
   white-space: nowrap;
   justify-content: center;
   align-items: center;
`;

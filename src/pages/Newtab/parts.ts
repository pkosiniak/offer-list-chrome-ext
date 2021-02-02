import styled from 'styled-components';
import { color } from '../../Styles/color';
import { theme } from '../../Styles/theme';

export const Wrapper = styled.div`
   background-color: ${color.dark};
   color: ${color.lightest};
   ${theme.dark}
   position: fixed;
   top: 0px;
   left: 0px;
   right: 0px;
   bottom: 0px;
   overflow: auto;
`;
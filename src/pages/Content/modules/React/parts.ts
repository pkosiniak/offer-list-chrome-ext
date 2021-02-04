import styled from 'styled-components';
import Box from '../../../../Components/Box/Box';
import Button from '../../../../Components/Button/Button';
import { color } from '../../../../Styles/color';
import { theme } from '../../../../Styles/theme';

export const pushHeight = 120;


export const Wrapper = styled(Box)`
   position: fixed;
   flex-grow: 1;
   top: 0;
   left: 0;
   right: 0;
   height: ${pushHeight}px;
   min-height: ${pushHeight}px;
   ${theme.dark}
   z-index: 10000;
   overflow-x: auto;
   resize: vertical;
`;

export const InnerWrapper = styled.div`
   display: flex;
`;

export const GetInfo = styled(Button)`
   white-space: normal;
   max-width: min-content;
   line-height: 1.5em;
`;

export const Refresh = styled(Button)`
   
`;
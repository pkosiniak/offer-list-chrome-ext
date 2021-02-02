import styled from 'styled-components';
import Box from '../../../../Components/Box/Box';
import Button from '../../../../Components/Button/Button';
import { color } from '../../../../Styles/color';

export const pushHeight = 100;


export const Wrapper = styled(Box)`
   position: fixed;
   flex-grow: 1;
   top: 0;
   left: 0;
   right: 0;
   height: ${pushHeight}px;
   min-height: ${pushHeight}px;
   background-color: ${color.white};
   z-index: 10000;
   /* width: max-content; */
   overflow-x: auto;
   resize: vertical;
`;

export const InnerWrapper = styled.div`
   display: flex;
`;

export const GetInfo = styled(Button)`
   
`;

export const Refresh = styled(Button)`
   
`;
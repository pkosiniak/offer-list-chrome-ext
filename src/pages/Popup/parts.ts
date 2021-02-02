import styled from 'styled-components';
import Box from '../../Components/Box/Box';
import Button from '../../Components/Button/Button';
import { color } from '../../Styles/color';

export const Wrapper = styled(Box)`
   position: absolute;
   top: 0px;
   bottom: 0px;
   left: 0px;
   right: 0px;
   text-align: center;
   height: 100%;
   padding: 10px;
   background-color: ${color.dark};
`;

export const ActionButton = styled(Button)`
   
`;
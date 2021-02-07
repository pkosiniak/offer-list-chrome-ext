import styled from 'styled-components';
import Box from '../../Components/Box/Box';
import Button from '../../Components/Button/Button';
import ToggleSwitch from '../../Components/Input/ToggleSwitch/ToggleSwitch';
import { color } from '../../Styles/color';
import { border, borderDarker } from '../../Styles/theme';

export const Wrapper = styled(Box)`
   /* position: absolute; */
   top: 0px;
   bottom: 0px;
   left: 0px;
   right: 0px;
   text-align: center;
   height: 100%;
   padding: 4px;
   background-color: ${color.dark};
   flex-grow: 1;
`;

export const LineWrapper = styled(Box)`
   flex-grow: 1;
   align-items: center;
   margin: 4px 0;
   height: 60px;
   ${borderDarker}
`;

export const StyledToggleSwitch = styled(ToggleSwitch)`
   /* justify-content: space-evenly; */
`;

export const ActionButton = styled(Button)`
   
`;
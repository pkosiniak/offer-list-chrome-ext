import styled from 'styled-components';
import Box from '../../Components/Box/Box';
import { border } from '../../Styles/theme';
import ExpandableCell from '../CellsCollection/modules/Cells/ExpandableCell';
import { WidthType } from '../CellsCollection/modules/Cells/shared/types';
import { getWidth } from '../CellsCollection/modules/Cells/shared/utils.parts';


export const Expandable = styled(ExpandableCell)`

`;

export const Wrapper = styled(Box) <WidthType>`
   ${getWidth}
   flex-grow: 1;
   ${border}
`;


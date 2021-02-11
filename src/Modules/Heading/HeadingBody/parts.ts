import styled, { css } from 'styled-components';
import Box from '../../../Components/Box/Box';
import Text from '../../../Components/Text/Text';
import { Color } from '../../../Styles/color';
import { textShadow } from '../../../Styles/font';
import { WidthType } from '../../CellsCollection/modules/Cells/shared/types';
import { switchWidth } from '../../CellsCollection/modules/Cells/shared/utils.parts';


export const Wrapper = styled(Box)`
   flex-grow: 1;
`;

export const OptionsWrapper = styled(Box) <Required<WidthType>>`
   flex-grow: 1;
   justify-content: flex-end;
   position: absolute;
   margin-left: 20px;
   width: ${({ width }) => `${switchWidth(width) - 20}px`};
`;

export const BlurWrapper = styled(Box)`
   backdrop-filter: blur(2px);
   margin-right: 2px;
`;

const inlineTextStyle = css`
   display: flex;
   padding: 5px 6px;
   background-color: ${Color.dark('0')};
`;

export const Filter = styled(Text) <Required<WidthType>>`
   ${inlineTextStyle}
   max-width: ${({ width }) => `${switchWidth(width - 1) - 2}px`};
   overflow: hidden;
   word-break: keep-all;
   ${textShadow(3)}
`;

export const Sort = styled(Text)`
   ${inlineTextStyle}
`;

export const Heading = styled(Text)`
   display: flex;
   padding: 6px;
`;

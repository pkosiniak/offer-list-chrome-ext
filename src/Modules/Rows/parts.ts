import styled, { css } from 'styled-components';
import Box from '../../Components/Box/Box';
import Row from '../../Components/Table/Row';
import { color } from '../../Styles/color';

export const Wrapper = styled(Box)`
   margin: 4px 0;
`;


type RowTextProps = {
   lineThrough: boolean,
   underline: boolean,
   italic: boolean,
   bold: boolean
}

const rowTextDecoration = ({
   bold, italic, underline, lineThrough,
}: RowTextProps) => css`
   ${lineThrough && css`text-decoration: line-through !important;`}
   ${underline && css`text-decoration: underline !important;`}
   ${italic && css`font-style: italic !important;`}
   ${bold && css`font-weight: bold !important;`}
`;

export const StyledRow = styled(Row) <RowTextProps>`
   :hover {
      background-color: ${color.grayDark};
   }
   :hover * {
      background-color: ${color.grayDark} !important;
   }
   :hover button {
      background-color: ${color.dark} !important;
   }
   input, select, textarea, p, a {
      ${rowTextDecoration}
   }
`;
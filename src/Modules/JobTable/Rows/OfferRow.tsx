import React from 'react';
import Row from '../../../Components/Table/Row';
import { ApplicationStatus, Offer } from '../../../types/job';
import CellsCollection from '../../CellsCollection/CellsCollection';
import { SenderType } from '../../../types/message';
import styled, { css } from 'styled-components';
import { color } from '../../../Styles/color';

interface OfferRowProps {
   offer: Offer,
   sender: SenderType,
   zIndex: number,
}

type RowTextProps = {
   lineThrough: boolean,
   underline: boolean,
   italic: boolean,
   bold: boolean
}

const rowTextDecoration = ({ bold, italic, underline, lineThrough }: RowTextProps) => css`
   ${lineThrough && css`text-decoration: line-through !important;`}
   ${underline && css`text-decoration: underline !important;`}
   ${italic && css`font-style: italic !important;`}
   ${bold && css`font-weight: bold !important;`}
`;

const StyledRow = styled(Row) <RowTextProps>`
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

const OfferRow: React.FC<OfferRowProps> = ({ offer, sender, zIndex }) => {
   const { status } = offer;
   return (
      <StyledRow
         columns={CellsCollection(offer, sender, zIndex)}
         lineThrough={status === ApplicationStatus.Refusal}
         underline={status === ApplicationStatus.Accepted || status === ApplicationStatus.Processing}
         italic={status === ApplicationStatus.NotSent}
         bold={status === ApplicationStatus.Accepted || status === ApplicationStatus.Recruitment}
      />
   );
};

export default OfferRow;

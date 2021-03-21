import React from 'react';
import { ApplicationStatus, Offer } from '../../types/job';
import CellsCollection from '../CellsCollection/CellsCollection';
import { SenderType } from '../../types/message';
import * as P from './parts';

interface OfferRowProps {
   offer: Offer,
   sender: SenderType,
   zIndex: number,
}

const OfferRow: React.FC<OfferRowProps> = ({ offer, sender, zIndex }) => {
   const { status } = offer;
   return (
      <P.StyledRow
         columns={CellsCollection(offer, sender, zIndex)}
         lineThrough={status === ApplicationStatus.Refusal}
         underline={status === ApplicationStatus.Accepted || status === ApplicationStatus.Processing}
         italic={status === ApplicationStatus.NotSent}
         bold={status === ApplicationStatus.Accepted || status === ApplicationStatus.Recruitment}
      />
   );
};

export default OfferRow;

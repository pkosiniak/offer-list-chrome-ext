import React from 'react';
import Row from '../../../Components/Table/Row';
import { Offer } from '../../../types/job';
import CellsCollection from '../../CellsCollection/CellsCollection';
import { SenderType, UUIDType } from '../../../types/message';

interface OfferRowProps {
   offer: Offer,
   sender: SenderType,
   zIndex: number,
}

const OfferRow: React.FC<OfferRowProps> = ({ offer, sender, zIndex }) => {
   return (
      <Row columns={CellsCollection(offer, sender, zIndex)} />
   );
};

export default OfferRow;

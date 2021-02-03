import React from 'react';
import Table from '../../Components/Table/Table';
import { useOfferListDidUpdate } from '../../hooks/useOfferDidUpdate';
import { OriginType } from '../../types/message';
import ControlRow from './Rows/ControlRow';
import HeadingRow from './Rows/HeadingRow';
import OfferRow from './Rows/OfferRow';

interface JobTableProps {
   originType: OriginType
}

const JobTable: React.FC<JobTableProps> = ({
   originType,
}) => {

   const [offerList, sender] = useOfferListDidUpdate(originType);

   return (
      <>
         <Table>
            <HeadingRow />
            {offerList.map((offer, index) => (
               <OfferRow
                  key={index}
                  offer={offer}
                  sender={sender}
                  zIndex={offerList.length - index}
               />
            ))}
         </Table>
         <ControlRow sender={sender} offerList={offerList}/>
      </>
   );
};

export default JobTable;

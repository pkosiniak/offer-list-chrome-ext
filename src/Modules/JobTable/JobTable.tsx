import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import { useOfferListDidUpdate } from '../../hooks/useOfferDidUpdate';
import { OriginType } from '../../types/message';
import { deepCopy } from '../../utils/deepCopy';
import ControlRow from './Rows/ControlRow';
import HeadingRow from './Rows/HeadingRow';
import OfferRow from './Rows/OfferRow';
import { sortBy } from './sorting';
import { SortType } from './types';

interface JobTableProps {
   originType: OriginType
}

const JobTable: React.FC<JobTableProps> = ({
   originType,
}) => {
   const [sort, setSort] = useState<SortType>();
   const [offerList, sender] = useOfferListDidUpdate(originType);
   const getSortedList = () => sort
      ? deepCopy(offerList).sort(sortBy[sort.by](sort.order))
      : offerList;

   const getList = () => {
      console.log('sort', sort);
      return getSortedList();
   };

   return (
      <>
         <Table>
            <HeadingRow
               sort={sort}
               setSort={setSort}
            />
            {getList().map((offer, index) => (
               <OfferRow
                  key={index}
                  offer={offer}
                  sender={sender}
                  zIndex={offerList.length - index}
               />
            ))}
         </Table>
         <ControlRow sender={sender} offerList={offerList} />
      </>
   );
};

export default JobTable;

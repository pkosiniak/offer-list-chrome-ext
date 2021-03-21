import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import { useOfferListDidUpdate } from '../../hooks/useOfferDidUpdate';
import { OfferList } from '../../types/job';
import { OriginType } from '../../types/message';
import { deepCopy } from '../../utils/deepCopy';
import ControlRow from '../Rows/ControlRow';
import HeadingRow from '../Rows/HeadingRow';
import OfferRow from '../Rows/OfferRow';
import { sortBy } from './sorting';
import { filterBy } from './filtering';
import { FilterType, SortType } from './types';

interface JobTableProps {
   originType: OriginType
}

const JobTable: React.FC<JobTableProps> = ({
   originType,
}) => {
   const [sort, setSort] = useState<SortType>();
   const [filter, setFilter] = useState<FilterType>();
   const [offerList, sender] = useOfferListDidUpdate(originType);
   const getSortedList = (list: OfferList) => sort
      ? list.sort(sortBy[sort.by](sort.order))
      : list;

   const getFilteredList = (list: OfferList) => filter
      ? list.filter(filterBy[filter.by](filter.filter))
      : list;
   const getList = () => {
      const copy = deepCopy(offerList)
      console.log('filter', filter, getFilteredList(copy));
      return getFilteredList(getSortedList(deepCopy(offerList)));
   };

   return (
      <>
         <Table>
            <HeadingRow
               sort={sort}
               setSort={setSort}
               filter={filter}
               setFilter={setFilter}
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

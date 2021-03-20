import React, { Dispatch, SetStateAction } from 'react';
import * as P from './parts';
import { SortOrder } from '../../JobTable/types';

export interface EditHeadingCellProps {
   sort: SortOrder
   setSort: Dispatch<SetStateAction<SortOrder>>,
   filter?: string,
   setFilter: Dispatch<SetStateAction<string | undefined>>
}

const EditHeadingCell: React.FC<EditHeadingCellProps> = ({
   setSort,
   filter,
   setFilter,
}) => {
   return (
      <P.Wrapper v>
         <P.StyledSelect
            onChange={({ target }) => setSort(target.value as SortOrder)}
            options={Object.values(SortOrder).map(direction => ({
               label: direction,
               value: direction,
            }))}
         />
         <P.Input
            value={filter || ''}
            onChange={({ target }) => setFilter(target.value)}
         />
      </P.Wrapper>
   );
};

export default EditHeadingCell;

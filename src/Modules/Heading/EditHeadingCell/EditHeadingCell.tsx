import React, { Dispatch, SetStateAction } from 'react';
import * as P from './parts';
import * as T from '../types';

export interface EditHeadingCellProps {
   sort: T.SortDirection
   setSort: Dispatch<SetStateAction<T.SortDirection>>,
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
            onChange={({ target }) => setSort(target.value as T.SortDirection)}
            options={Object.values(T.SortDirection).map(direction => ({
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

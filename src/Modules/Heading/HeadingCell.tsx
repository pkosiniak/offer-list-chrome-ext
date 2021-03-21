import { } from 'recoil';
import React, { useState } from 'react';
import * as P from './parts';
import * as T from './types';
import EditHeadingCell from './EditHeadingCell/EditHeadingCell';
import HeadingBody, { HeadingBodyProps } from './HeadingBody/HeadingBody';
import { ColumnKey, FilterKeyType, SortOrder } from '../JobTable/types';
import { useMapPropsToState } from '../../hooks/useMapPropsToState';

interface HeadingCellProps extends HeadingBodyProps {
   widthRange: T.WidthRange,
   setFilter: (by: ColumnKey, filter: FilterKeyType) => void,
   setSort: (by: ColumnKey, order: SortOrder) => void,
   name: ColumnKey
}

const HeadingCell: React.FC<HeadingCellProps> = ({
   text,
   name,
   width,
   sort,
   setSort,
   setFilter,
}) => {
   const [sortState, setSortState] = useMapPropsToState<SortOrder>(sort);
   const [filterState, setFilterState] = useState<string>();
   const onOkClick = () => {
      setSort(name, sortState);
      setFilter(name, filterState || '');
   };
   return (
      <P.Expandable
         onOkClick={onOkClick}
         onCancelClick={() => void 0}
         width={width}
         zIndex={1000}
         options={{ expandButtonHidden: true }}
      >
         {({ isExpanded }) => (
            <P.Wrapper v>
               <HeadingBody
                  sort={sortState}
                  filter={filterState}
                  text={text}
                  width={width}
               />
               {isExpanded && (
                  <EditHeadingCell
                     sort={sortState}
                     setSort={setSortState}
                     filter={filterState}
                     setFilter={setFilterState}
                  />
               )}
            </P.Wrapper>
         )}
      </P.Expandable>
   );
};

export default HeadingCell;


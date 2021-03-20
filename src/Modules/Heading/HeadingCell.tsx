import { } from 'recoil';
import React, { useState } from 'react';
import * as P from './parts';
import * as T from './types';
import EditHeadingCell from './EditHeadingCell/EditHeadingCell';
import HeadingBody, { HeadingBodyProps } from './HeadingBody/HeadingBody';
import { SortBy, SortOrder } from '../JobTable/types';
import { useMapPropsToState } from '../../hooks/useMapPropsToState';

interface HeadingCellProps extends HeadingBodyProps {
   widthRange: T.WidthRange,
   setFilter: () => void,
   setSort: (by: SortBy, order: SortOrder) => void,
   name: SortBy
}

const HeadingCell: React.FC<HeadingCellProps> = ({
   text,
   name,
   width,
   sort,
   setSort,
}) => {
   const [sortState, setSortState] = useMapPropsToState<SortOrder>(sort);
   const [filterState, setFilterState] = useState<string>();
   const onOkClick = () => {
      setSort(name, sortState);
   };
   return (
      <P.Expandable
         onOkClick={onOkClick}
         onCancelClick={() => { }}
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


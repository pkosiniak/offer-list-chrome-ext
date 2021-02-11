import { } from 'recoil';
import React, { useState } from 'react';
import { CellWidth } from '../CellsCollection/modules/Cells/shared/types';
import * as P from './parts';
import Select from '../../Components/Input/Select/Select';
import TextInput from '../../Components/Input/TextInput/TextInput';
import * as T from './types';
import EditHeadingCell, { EditHeadingCellProps } from './EditHeadingCell/EditHeadingCell';
import HeadingBody, { HeadingBodyProps } from './HeadingBody/HeadingBody';

interface HeadingCellProps
   extends HeadingBodyProps, EditHeadingCellProps {
   widthRange: T.WidthRange,
   setFilter: () => void,
   setSort: () => void
}

const HeadingCell: React.FC<HeadingCellProps> = ({
   text,
   width,

}) => {
   const [sortState, setSortState] = useState<T.SortDirection>(T.SortDirection.NONE);
   const [filterState, setFilterState] = useState<string>();
   return (
      <P.Expandable
         onOkClick={() => { }}
         onCancelClick={() => { }}
         width={width}
         zIndex={1}
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


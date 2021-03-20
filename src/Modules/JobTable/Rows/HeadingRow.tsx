import React from 'react';
import Row from '../../../Components/Table/Row';
import { CellWidth } from '../../CellsCollection/modules/Cells/shared/types';
import { headingRowNames } from '../../common/common';
import HeadingCell from '../../Heading/HeadingCell';
import { SortingProps } from '../../Heading/types';
import { sortBy } from '../sorting';
import { SortBy, SortOrder } from '../types';

interface HeadingRowProps {

}

type HeadingRowPropsType = HeadingRowProps
   & SortingProps

const widths = [
   CellWidth.XSmall,
   CellWidth.Large,
   CellWidth.Medium,
   CellWidth.Medium,
   CellWidth.Large,
   CellWidth.Small,
   CellWidth.Large,
   CellWidth.Medium,
   CellWidth.Medium,
   CellWidth.Medium,
   CellWidth.Medium,
   CellWidth.Medium,
   CellWidth.Small,
];

const HeadingRow: React.FC<HeadingRowPropsType> = ({
   sort,
   setSort,
}) => {
   const setSorting = (
      by: SortBy,
      order: SortOrder,
   ) => setSort(
      order === SortOrder.NONE
         ? void 0
         : { by, order },
   );
   const DANGEROUSLY_getName = (
      text: string,
   ) => Object.keys(sortBy).find(
      key => key.toLowerCase().match(text.toLowerCase()),
   ) as SortBy;

   return (
      <Row
         isHeading
         columns={Object.values(headingRowNames).map((text, index) => (
            <HeadingCell
               name={DANGEROUSLY_getName(text)}
               key={index}
               text={text}
               width={widths[index]}
               widthRange={{ min: CellWidth.Small, max: CellWidth.Large, default: widths[index] }}
               sort={sort?.by === DANGEROUSLY_getName(text) && sort?.order || SortOrder.NONE}
               setSort={setSorting}
               filter={void 0}
               setFilter={() => { }}
            />
         ))}
         style={{ height: 40 }}
         columnStyle={{ verticalAlign: 'top' }}
      />
   );
};

export default HeadingRow;
import React from 'react';
import { CellWidth } from '../../CellsCollection/modules/Cells/shared/types.parts';
import { FilterKeyType, SortOrder } from '../../JobTable/types';
import * as P from './parts';

export interface HeadingBodyProps {
   width: CellWidth,
   sort: SortOrder
   filter?: FilterKeyType,
   text: string
}

const HeadingBody: React.FC<HeadingBodyProps> = ({
   sort,
   width,
   filter,
   text,
}) => {
   return (
      <P.Wrapper>
         <P.OptionsWrapper
            horizontal
            width={width}
         >
            <P.BlurWrapper>
               {filter && (
                  <P.Filter
                     inline
                     text={filter}
                     width={width}
                  />
               )}
               {sort !== SortOrder.NONE && (
                  <P.Sort inline>
                     {sort === SortOrder.ASC ? '⇩' : '⇧'}
                  </P.Sort>
               )}
            </P.BlurWrapper>
         </P.OptionsWrapper>
         <P.Heading inline width={width}>
            {text}
         </P.Heading>
      </P.Wrapper>
   );
};

export default HeadingBody;

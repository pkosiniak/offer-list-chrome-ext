import React from 'react';
import { CellWidth } from '../../CellsCollection/modules/Cells/shared/types.parts';
import * as P from './parts';
import * as T from '../types';

export interface HeadingBodyProps {
   width: CellWidth,
   sort: T.SortDirection
   filter?: string,
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
               {sort !== T.SortDirection.NONE && (
                  <P.Sort inline>
                     {sort === T.SortDirection.ASC ? '⇩' : '⇧'}
                  </P.Sort>
               )}
            </P.BlurWrapper>
         </P.OptionsWrapper>
         <P.Heading inline>
            {text}
         </P.Heading>
      </P.Wrapper>
   );
};

export default HeadingBody;

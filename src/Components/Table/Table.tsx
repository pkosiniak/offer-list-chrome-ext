import React, { ReactNode } from 'react';
import * as P from './parts';

interface TableProps {
   caption?: ReactNode
}

const Table: React.FC<TableProps> = ({
   caption,
   children,
}) => {
   return (
      <P.TableWrapper>
         {caption && (
            <P.Caption>
               {caption}
            </P.Caption>
         )}
         <P.TBody>
            {children}
         </P.TBody>
      </P.TableWrapper>
   );
};

export default Table;

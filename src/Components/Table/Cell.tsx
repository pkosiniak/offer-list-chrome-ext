import React, { CSSProperties } from 'react';
import { TD } from './parts';

interface CellProps {
   style?: CSSProperties,
}

const Cell: React.FC<CellProps> = ({
   style,
   children,
}) => {
   return (
      <TD style={style}>
         {children}
      </TD>
   );
};

export default Cell;

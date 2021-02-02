import React, { CSSProperties } from 'react';
import Cell from './Cell';
import Heading from './Heading';

interface ColumnProps {
   index: number,
   isHeading?: boolean,
   columnStyle?: CSSProperties | CSSProperties[],
}

const Column: React.FC<ColumnProps> = ({
   index,
   isHeading,
   columnStyle,
   children,
}) => isHeading
   ? (
      <Heading
         style={Array.isArray(columnStyle) ? columnStyle[index] : columnStyle}
      >
         {children}
      </Heading>
   ) : (
      <Cell
         style={Array.isArray(columnStyle) ? columnStyle[index] : columnStyle}
      >
         {children}
      </Cell>
   );

export default Column;
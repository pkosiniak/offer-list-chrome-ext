import React, { CSSProperties, ReactNode } from 'react';
import Cell from './Cell';
import Column from './Column';
import Heading from './Heading';
import { TR } from './parts';

interface RowProps {
   isHeading?: boolean,
   columns?: ReactNode[],
   style?: CSSProperties,
   columnStyle?: CSSProperties | CSSProperties[],
}

const Row: React.FC<RowProps> = ({
   columns,
   isHeading,
   style,
   columnStyle,
}) => {


   return (
      <TR style={style}>
         {columns?.map((child, index) => (
            <Column
               key={index}
               index={index}
               isHeading={isHeading}
               columnStyle={columnStyle}
            >
               {child}
            </Column>
         ))}
      </TR>
   );
};

export default Row;

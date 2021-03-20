import React, { CSSProperties, ReactNode } from 'react';
import Column from './Column';
import { TR } from './parts';

interface RowProps {
   isHeading?: boolean,
   columns?: ReactNode[],
   style?: CSSProperties,
   columnStyle?: CSSProperties | CSSProperties[],
   className?: string
}

const Row: React.FC<RowProps> = ({
   columns,
   isHeading,
   style,
   className,
   columnStyle,
}) => {

   return (
      <TR style={style} className={className} >
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

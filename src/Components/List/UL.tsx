import React, { HTMLAttributes, ReactNode } from 'react';
import * as P from './parts';

interface ULProps extends HTMLAttributes<HTMLUListElement> {
   items: ReactNode[],
}

const UL: React.FC<ULProps> = ({
   items,
   children,
   ...rest
}) => {
   return (
      <P.UL
         {...rest}
      >
         {items.map((item, index) => (
            <P.LI key={index}>
               {item}
            </P.LI>
         ))}
         {children && <P.LI>{children}</P.LI>}
      </P.UL>
   );
};

export default UL;

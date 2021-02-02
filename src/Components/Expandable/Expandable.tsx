import React, { ReactNode, useEffect, useState } from 'react';
import Button from '../Button/Button';
import * as P from './parts';

interface ExpandableProps {
   Header: ReactNode,
   over?: boolean,
   isOpen?: boolean,
   getIsOpen?: boolean,
}

const Expandable: React.FC<ExpandableProps> = ({
   Header,
   over,
   isOpen,
   children,
}) => {
   const [isExpanded, setIsExpanded] = useState(!!isOpen);
   useEffect(() => {
      setIsExpanded(!!isOpen);
   }, [isOpen]);

   return (
      <P.Wrapper>
         <P.HeaderWrapper>
            {Header}
            <P.Toggle
               text={'⋁'}
               onClick={() => setIsExpanded(value => !value)}
            />
         </P.HeaderWrapper>
         <P.Content
            isExpanded={isExpanded}
            over={over}
         >
            {children}
         </P.Content>
      </P.Wrapper>
   );
};

export default Expandable;

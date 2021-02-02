import React, { CSSProperties } from 'react';
import { TH } from './parts';

interface HeadingProps {
   text?: string,
   style?: CSSProperties,
}

const Heading: React.FC<HeadingProps> = ({
   children,
   text,
   style,
}) => {
   return (
      <TH style={style}>
         {text || children}
      </TH>
   );
};

export default Heading;

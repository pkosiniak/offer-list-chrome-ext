import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import * as P from './parts';

interface LinkProps extends DetailedHTMLProps<
   AnchorHTMLAttributes<HTMLAnchorElement>,
   HTMLAnchorElement
   > {

}

const Link: React.FC<LinkProps> = ({
   children,
   ref,
   target,
   ...rest
}) => {
   return (
      <P.Link
         target={target || '_blank'}
         {...rest}
      >
         {children}
      </P.Link>
   );
};

export default Link;

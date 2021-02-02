import React from 'react';
import Box from '../../../../../Components/Box/Box';
import * as P from '../shared/parts';

interface DisableLinkItemProps {
   url: string;
   name?: string | undefined;
   isAvailable?: boolean | undefined;
}

const DisableLinkItem: React.FC<DisableLinkItemProps> = ({
   url,
   isAvailable,
   name,
}) => {
   return (
      <Box h>
         <P.StyledCheckbox
            disabled
            defaultChecked={isAvailable}
         />
         <P.StyledLink
            href={url}
         >
            {name || 'link'}
         </P.StyledLink>
      </Box>
   );
};

export default DisableLinkItem;

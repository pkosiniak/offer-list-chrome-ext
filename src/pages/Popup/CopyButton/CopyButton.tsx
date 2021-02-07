import React from 'react';
import * as P from './parts';

interface CopyButtonProps {
   onClick: () => void,
   isCopied: boolean
}

const CopyButton: React.FC<CopyButtonProps> = ({ onClick, isCopied }) => {
   return (
      <P.CopyButton
         onClick={onClick}
      >
         <P.Page>{'📄'}</P.Page>
         <P.Copy>{'📄'}</P.Copy>
         {isCopied && <P.OK>{'✔'}</P.OK>}

      </P.CopyButton>
   );
};

export default CopyButton;

// display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     padding: 8px;
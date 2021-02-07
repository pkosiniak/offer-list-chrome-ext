import React, { useRef } from 'react';
import TextInput from '../../../Components/Input/TextInput/TextInput';
import CopyButton from '../CopyButton/CopyButton';
import { LineWrapper } from '../parts';
import styled from 'styled-components';


interface CopyRowProps {
   label: string,
   text: string,
   isCopied: boolean,
   setIsCopied: () => void
}

const StyledLineWrapper = styled(LineWrapper)`
   padding-right: 8px;
`;

const CopyRow: React.FC<CopyRowProps> = ({
   label,
   text,
   isCopied,
   setIsCopied,
}) => {
   const ref = useRef<HTMLInputElement>(null);
   return (
      <StyledLineWrapper h>
         <TextInput
            ref={ref}
            readOnly
            label={label}
            defaultValue={text}
            DEPRECATED_wrapperClassName={'textInputWrapper'}
         />
         <CopyButton
            onClick={() => {
               ref.current?.select();
               document.execCommand('copy');
               setIsCopied();
            }}
            isCopied={isCopied}
         />
      </StyledLineWrapper>
   );
};

export default CopyRow;

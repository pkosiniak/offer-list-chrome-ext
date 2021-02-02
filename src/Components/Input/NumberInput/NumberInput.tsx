import React, { InputHTMLAttributes, useState } from 'react';
import { useID } from '../../../pages/utils/useID';
import * as P from '../parts';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string,
}



const NumberInput: React.FC<TextInputProps> = ({
   id,
   label,
   ...rest
}) => {
   const ID = useID({ id, prefix: 'textInput' });

   const Component = (
      <P.StyledInput
         type="number"
         id={ID}
         {...rest}
      />
   );

   return label
      ? (
         <P.Wrapper>
            <P.Label htmlFor={ID} >
               {label}
            </P.Label>
            {Component}
         </P.Wrapper>
      ) : (
         Component
      );
};


export default NumberInput;

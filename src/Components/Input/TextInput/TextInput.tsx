import React, { InputHTMLAttributes, useState } from 'react';
import { useID } from '../../../pages/utils/useID';
import * as P from '../parts';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
   // value?: string;
   // onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
   // multiline?: boolean,
   label?: string,
}



const TextInput: React.FC<TextInputProps> = ({
   // multiline,
   id,
   label,
   ...rest
}) => {
   const ID = useID({ id, prefix: 'textInput' }); //useState(id || 'input_' + Math.floor(Math.random() * 10 ** 8));

   const Component = (
      <P.StyledInput
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


export default TextInput;

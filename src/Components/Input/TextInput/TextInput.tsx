import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useState } from 'react';
import { useID } from '../../../hooks/useID';
import * as P from '../parts';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
   // value?: string;
   // onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
   // multiline?: boolean,
   label?: string,
   DEPRECATED_wrapperClassName?: string,
}



const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = ({
   // multiline,
   id,
   label,
   DEPRECATED_wrapperClassName,
   ...rest
}, ref) => {
   const ID = useID({ id, prefix: 'textInput' }); //useState(id || 'input_' + Math.floor(Math.random() * 10 ** 8));

   const Component = (
      <P.StyledInput
         ref={ref}
         id={ID}
         {...rest}
      />
   );

   return label
      ? (
         <P.Wrapper className={DEPRECATED_wrapperClassName}>
            <P.Label htmlFor={ID} >
               {label}
            </P.Label>
            {Component}
         </P.Wrapper>
      ) : (
         Component
      );
};


export default forwardRef(TextInput);

import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useID } from '../../../hooks/useID';
import { useRefEffect } from '../../../hooks/useRefEffect';
import * as P from '../parts';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string,
   valueAsDate?: Date
}



const DateInput: React.FC<DateInputProps> = ({
   label,
   id,
   valueAsDate,
   value,
   ...rest
}) => {
   const ID = useID({ id, prefix: 'dateInput' });

   const ref = useRef<HTMLInputElement>(null);
   useEffect(() => {
      if (ref.current)
         ref.current.valueAsDate = valueAsDate || null;
   }, [ref]);

   const Component = (
      <P.StyledInput
         type="date"
         ref={ref}
         id={ID}
         {...rest}
      />
   );

   return label
      ? (
         <P.Wrapper>
            <P.Label htmlFor={ID} >
               {label}
               {Component}
            </P.Label>
         </P.Wrapper>
      ) : (
         Component
      );
};

export default DateInput;

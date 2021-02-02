import React, { HTMLAttributes, useState, InputHTMLAttributes } from 'react';
import { useID } from '../../../pages/utils/useID';
import * as P from './parts';

interface ActiveStateProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string
}
const CheckBox: React.FC<ActiveStateProps> = ({ label, id, ...rest }) => {
   const ID = useID({ id, prefix: 'checkbox' });
   return (
      <P.CheckBoxWrapper>
         <P.CheckBox
            id={ID}
            type="checkbox"
            {...rest}
         />
         {label && (
            <P.Label htmlFor={ID}>
               {label}
            </P.Label>
         )}
      </P.CheckBoxWrapper>
   );
};

export default CheckBox;

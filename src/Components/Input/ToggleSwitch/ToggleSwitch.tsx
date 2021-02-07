import React, { useState,HTMLAttributes } from 'react';
import { useID } from '../../../hooks/useID';
import * as P from './parts';
import Label, { LabelProps } from '../Label/Label';

interface ToggleSwitchProps extends LabelProps, HTMLAttributes<HTMLLabelElement> {
   isChecked?: boolean,
   setIsChecked?: () => void,
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
   isChecked,
   setIsChecked,
   id,
   label,
   inputPosition,
   wrapperProps,
   labelProps,
   ...rest
}) => {
   const ID = useID({ id, prefix: 'toggleSwitch' });

   return (
      <Label
         id={ID}
         label={label}
         inputPosition={inputPosition}
         labelProps={labelProps}
         wrapperProps={wrapperProps}
      >
         <P.LabelWrapper
            htmlFor={ID}
            isChecked={!!isChecked}
            {...rest}
         >
            <P.HiddenInput
               id={ID}
               type="checkbox"
               checked={isChecked}
               onChange={() => setIsChecked && setIsChecked()}
            />
            <P.Slider
               isChecked={!!isChecked}
            />
         </P.LabelWrapper>
      </Label>
   );
};

export default ToggleSwitch;

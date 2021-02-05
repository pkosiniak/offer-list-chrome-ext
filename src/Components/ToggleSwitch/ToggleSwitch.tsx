import React, { useState } from 'react';
import { useID } from '../../hooks/useID';
import * as P from './parts';

interface ToggleSwitchProps {
   isChecked?: boolean, 
   setIsChecked?: () => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, setIsChecked }) => {
   const ID = useID({ prefix: 'toggleSwitch' });
   return (
      <P.LabelWrapper
         htmlFor={ID}
         isChecked={!!isChecked}
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
   );
};

export default ToggleSwitch;

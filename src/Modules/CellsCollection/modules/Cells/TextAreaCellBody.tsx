import React, { useState } from 'react';
import Box from '../../../../Components/Box/Box';
import { useMapPropsToState } from '../../../../pages/utils/useMapPropsToState';
import * as P from './shared/parts';
import { ExpandableCellState } from './shared/types';

interface TextAreaCellBodyProps extends Pick<
   ExpandableCellState, 'isDisabled' | 'isExpanded' | 'isActive' | 'zIndex'
   > {
   value?: string,
   onChange: (value: string) => void
   // disabled: boolean,
   // isExpanded: boolean,
   // isActive: boolean
   setIsActive?: (value: boolean) => void,
   // zIndex: number
}

const TextAreaCellBody: React.FC<TextAreaCellBodyProps> = ({
   value,
   onChange,
   isDisabled,
   isExpanded,
   isActive,
   setIsActive,
   zIndex,
}) => {
   // console.log('isExpanded', isExpanded);
   return (
      <P.StyledTextArea
         value={value}
         onChange={({ target }) => onChange(target.value)}
         isExpanded={!!isExpanded}
         autoResize={isExpanded}
         disabled={isDisabled}
         isActive={!!isActive}
         rows={isExpanded ? undefined : 1}
         onFocus={() => setIsActive && setIsActive(true)}
         onBlur={() => setIsActive && setIsActive(false)}
         style={{ zIndex: isActive ? zIndex + 2 : zIndex }}
      />
   );
};

export default TextAreaCellBody;

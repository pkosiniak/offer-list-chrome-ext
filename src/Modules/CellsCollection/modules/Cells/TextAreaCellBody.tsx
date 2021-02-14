import React, {  } from 'react';
import { expandableAction as EA } from './localStore/actions';
import * as P from './shared/parts';
import { WithExpandableState } from './shared/types';

interface TextAreaCellBodyProps extends WithExpandableState {
   value?: string,
   onChange: (value: string) => void
}

const TextAreaCellBody: React.FC<TextAreaCellBodyProps> = ({
   value,
   onChange,
   expandableState,
}) => {
   const { isExpanded, isActive, isDisabled, zIndex, dispatch } = expandableState;
   return (
      <P.StyledTextArea
         value={value}
         onChange={({ target }) => onChange(target.value)}
         isExpanded={!!isExpanded}
         autoResize={isExpanded}
         disabled={isDisabled}
         isActive={!!isActive}
         rows={isExpanded ? undefined : 1}
         onFocus={() => dispatch(EA.setIsActive(true))}
         onBlur={() => dispatch(EA.setIsActive(false))}
         style={{ zIndex: isActive ? zIndex + 2 : zIndex }}
      />
   );
};


export default TextAreaCellBody;
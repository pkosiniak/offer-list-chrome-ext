import React from 'react';
import * as P from '../shared/parts';
import { ExpandableCellState } from '../shared/types';

interface DisabledRequirementItemProps extends Pick<ExpandableCellState, 'isExpanded'> {
   name: string,
   level?: string,
}

const DisabledRequirementItem: React.FC<DisabledRequirementItemProps> = ({
   name,
   isExpanded,
   level,
}) => (
   <P.RequirementWrapper isExpanded={!!isExpanded} >
      <P.TextWrapper isExpanded={!!isExpanded} >
         {name && (name + (level ? ` - ${level}` : '') + ';')}
      </P.TextWrapper>
   </P.RequirementWrapper>
);

export default DisabledRequirementItem;

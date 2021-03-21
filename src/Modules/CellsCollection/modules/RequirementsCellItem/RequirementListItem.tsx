import React from 'react';
import { StackRequirements } from '../../../../types/job';
import EditRequirementsItem from './EditRequirementsItem';
import { ChildrenExportType, ExpandableCellState, ListItemPickFromExpandable } from '../../../Cells/shared/types';
import * as P from '../../../Cells/shared/parts';
import DisabledRequirementItem from './DisabledRequirementItem';

interface RequirementListItemProps extends ListItemPickFromExpandable {
   requirement: StackRequirements,
   setRequirement: (requirement: StackRequirements) => void,
   deleteRequirement: () => void
}

const RequirementListItem = ({
   requirement,
   setRequirement,
   deleteRequirement,
   isExpanded,
   isDisabled,
   width,
}: RequirementListItemProps) => isDisabled
   ? (
      <DisabledRequirementItem
         isExpanded={isExpanded}
         {...requirement}
      />
   ) : (
      <EditRequirementsItem
         width={width}
         requirement={requirement}
         setRequirement={setRequirement}
         deleteRequirement={deleteRequirement}
         isExpanded={isExpanded}
      />
   );

export default RequirementListItem;
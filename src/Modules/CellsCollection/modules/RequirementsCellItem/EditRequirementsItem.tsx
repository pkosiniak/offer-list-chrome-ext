import React from 'react';
import Button from '../../../../Components/Button/Button';
import { StackRequirements } from '../../../../types/job';
import { CellWidth, PickExpandableCellStateIsExpandedAndWidth } from '../../../Cells/shared/types';
import * as P from '../../../Cells/shared/parts';
import DeleteButton from '../../../InteractiveButtons/DeleteButton';

interface EditRequirementsItemProps extends PickExpandableCellStateIsExpandedAndWidth {
   requirement: StackRequirements,
   setRequirement: (requirement: StackRequirements) => void,
   deleteRequirement: () => void,
}

const EditRequirementsItem: React.FC<EditRequirementsItemProps> = ({
   requirement,
   setRequirement,
   deleteRequirement,
   isExpanded,
   width,
}) => {
   const { name, level } = requirement;
   return (
      <P.InputEditorWrapper
         width={width}
         vertical
      >
         <P.StyledTextInput
            width={width}
            value={name}
            onChange={({ target }) => setRequirement({ ...requirement, name: target.value })}
            label={isExpanded ? 'Requirement' : void 0}
         />
         <P.SpaceWrapper h>
            <P.StyledTextInput
               value={level || ''}
               onChange={({ target }) => setRequirement({ ...requirement, level: target.value })}
               width={width - 1}
               label={isExpanded ? 'Level' : void 0}
            />
            <DeleteButton
               confirmMsg={'Delete Requirement?'}
               deleteAction={deleteRequirement}
            />
         </P.SpaceWrapper>
      </P.InputEditorWrapper>
   );
};

export default EditRequirementsItem;

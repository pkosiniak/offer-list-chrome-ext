import React from 'react';
import * as T from '../localStore/types';
import { deleteItemAtIndex, replaceItemAtIndex } from '../../../../../utils/arrayReplaceRemove';
import { StackRequirements } from '../../../../../types/job';
import RequirementListItem from './RequirementListItem';
import { ListCellBodyProps } from '../shared/types';
import ListCell from '../ListCell';

type RequirementsCellProps = ListCellBodyProps<
   StackRequirements,
   T.RequirementsCellState,
   T.RequirementCellAction
>

const RequirementsCell: React.FC<RequirementsCellProps> = ({
   state,
   setState,
   newItem,
   setNewItem,
   onOkClick,
   expandableState,
}) => {
   return (
      <ListCell
         list={state.requirements}
         setItem={(requirement, index, requirements) => setState({
            type: T.LIST_CELL.REQUIREMENTS_UPDATE,
            requirements: replaceItemAtIndex(requirements, index, requirement),
         })}
         deleteItem={(index, requirements) => setState({
            type: T.LIST_CELL.REQUIREMENTS_UPDATE,
            requirements: deleteItemAtIndex(requirements, index),
         })}
         newItem={newItem}
         setNewItem={setNewItem}
         deleteNewItem={() => setNewItem(void 0)}
         onAddNewItemClick={() => setNewItem({ name: '', level: '' })}
         onOkClick={onOkClick}
         expandableState={expandableState}
      >
         {(requirement, setRequirements, deleteRequirement) => (
            <RequirementListItem
               requirement={requirement}
               setRequirement={setRequirements}
               deleteRequirement={deleteRequirement}
               {...expandableState}
            />
         )}
      </ListCell>
   );
};

export default RequirementsCell;



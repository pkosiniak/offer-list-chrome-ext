import React, { Dispatch, SetStateAction } from 'react';
import * as T from '../localStore/types';
import { deleteItemAtIndex, replaceItemAtIndex } from '../../../../../utils/arrayReplaceRemove';
import { StackRequirements } from '../../../../../types/job';
import RequirementListItem from './RequirementListItem';
import { CellWidth, ExpandableCellState, ListCellBodyProps } from '../shared/types';
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
   children: _,
   ...expandableState
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
         {...expandableState}
      >
         {(requirement, setRequirements, deleteRequirement) => (
            <RequirementListItem
               requirement={requirement}
               setRequirement={setRequirements}
               deleteRequirement={deleteRequirement}
               width={expandableState.width || CellWidth.Default}
               {...expandableState}
            />
         )}
      </ListCell>
   );
};

export default RequirementsCell;



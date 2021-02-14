import React from 'react';
import * as T from '../localStore/types';
import { deleteItemAtIndex, replaceItemAtIndex } from '../../../../../utils/arrayReplaceRemove';
import { StackRequirements } from '../../../../../types/job';
import RequirementListItem from './RequirementListItem';
import { ListCellBodyProps } from '../shared/types';
import ListCell, { DeleteActionCallback, SetActionCallback } from '../ListCell';

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
   const setItem: SetActionCallback<StackRequirements> = (
      requirements, index, requirement,
   ) => setState(replaceItemAtIndex(requirements, index, requirement));

   const deleteItem: DeleteActionCallback<StackRequirements> = (
      requirements, index,
   ) => setState(deleteItemAtIndex(requirements, index));

   return (
      <ListCell
         list={state.requirements}
         setItem={setItem}
         deleteItem={deleteItem}
         newItem={newItem}
         setNewItem={setNewItem}
         deleteNewItem={() => setNewItem(void 0)}
         onAddNewItemClick={() => setNewItem({ name: '', level: '' })}
         onOkClick={onOkClick}
         expandableState={expandableState}
      >
         {({ item, setItem, deleteItem }) => (
            <RequirementListItem
               requirement={item}
               setRequirement={setItem}
               deleteRequirement={deleteItem}
               {...expandableState}
            />
         )}
      </ListCell>
   );
};

export default RequirementsCell;



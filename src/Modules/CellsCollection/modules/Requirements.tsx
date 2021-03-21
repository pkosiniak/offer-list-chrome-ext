import React, { useState } from 'react';
import { Offer, StackRequirements } from '../../../types/job';
import { OFFER } from '../LocalStore/types';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { CellWidth, CollectionProps } from '../../Cells/shared/types';
// import { setRequirements } from '../../Cells/localStore/actions';
import { ListCell } from '../../Cells/ExpandableCell';
import RequirementListItem from './RequirementsCellItem/RequirementListItem';
import { useMapPropsToState } from '../../../hooks/useMapPropsToState';
import { DeleteActionCallback, SetActionCallback } from '../../Cells/ExpandableCell/ListCell/ListCellBody';
import { replaceItemAtIndex, deleteItemAtIndex } from '../../../utils/arrayReplaceRemove';

type RequirementsProps = CollectionProps & Pick<Offer, 'requirements'>

const Requirements = ({
   dispatch,
   requirements: stackRequirements,
   zIndex,
}: RequirementsProps) => {
   // const [state, setState] = useReducerEffect(
   //    requirementCellReducer,
   //    { requirements: stackRequirements || [] },
   //    { type: LIST_CELL.REQUIREMENTS_UPDATE, requirements: stackRequirements },
   // );
   const [requirements, setRequirements] = useMapPropsToState(stackRequirements);
   const [newItem, setNewItem] = useState<StackRequirements>();
   const prevRequirements = usePrevProps(stackRequirements);

   const onOkClick = () => {
      const newRequirements = newItem
         ? requirements?.concat(newItem)
         : requirements;
      dispatch({
         type: OFFER.REQUIREMENTS,
         requirements: newRequirements,
      });
      setNewItem(void 0);
   };
   // const dispatchRequirements = (
   //    requirements: StackRequirements[],
   // ) => setState(setRequirements(requirements));

   const onCancelClick = () => {
      prevRequirements && setRequirements(prevRequirements),
      setNewItem(void 0);
   };

   const setItem: SetActionCallback<StackRequirements> = (
      requirements, index, requirement,
   ) => setRequirements(replaceItemAtIndex(requirements, index, requirement));

   const deleteItem: DeleteActionCallback<StackRequirements> = (
      requirements, index,
   ) => setRequirements(deleteItemAtIndex(requirements, index));

   return (
      <ListCell
         zIndex={zIndex || 1}
         onCancelClick={onCancelClick}
         onOkClick={onOkClick}
         width={CellWidth.Large}
         list={requirements}
         setItem={setItem}
         deleteItem={deleteItem}
         newItem={newItem}
         setNewItem={setNewItem}
         deleteNewItem={() => setNewItem(void 0)}
         onAddNewItemClick={() => setNewItem({ name: '', level: '' })}
      >
         {({ item, setItem, deleteItem }, expandableState) => (
            <RequirementListItem
               requirement={item}
               setRequirement={setItem}
               deleteRequirement={deleteItem}
               {...expandableState}
            />
         )}
      </ListCell>
   );
   // (
   //    <ExpandableCell
   //       zIndex={zIndex || 1}
   //       onCancelClick={onCancelClick}
   //       onOkClick={onOkClick}
   //       width={CellWidth.Large}
   //    >
   //       {(expandableState) => (
   //          <RequirementsCellBody
   //             newItem={newItem}
   //             setNewItem={setNewItem}
   //             state={state}
   //             setState={dispatchRequirements}
   //             onOkClick={onOkClick}
   //             expandableState={expandableState}
   //          />
   //       )}
   //    </ExpandableCell>
   // );
};

export default Requirements;

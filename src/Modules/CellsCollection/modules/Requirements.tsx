import React, { useState } from 'react';
import { useReducerEffect } from '../../../hooks/useReducerEffect';
import { Offer, StackRequirements } from '../../../types/job';
import ExpandableCell from './Cells/ExpandableCell';
import RequirementsCellBody from './Cells/RequirementsCellBody/RequirementsCellBody';
import { requirementCellReducer } from './Cells/localStore/reducers';
import { LIST_CELL } from './Cells/localStore/types';
import { OFFER } from '../LocalStore/types';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { CellWidth, CollectionProps } from './Cells/shared/types';

type RequirementsProps = CollectionProps & Pick<Offer, 'requirements'>

const Requirements = ({
   dispatch,
   requirements,
   zIndex,
}: RequirementsProps) => {
   const [state, setState] = useReducerEffect(
      requirementCellReducer,
      { requirements: requirements || [] },
      { type: LIST_CELL.REQUIREMENTS_UPDATE, requirements },
   );
   const [newItem, setNewItem] = useState<StackRequirements>();
   const prevState = usePrevProps(state);

   const onOkClick = () => {
      const newRequirements = newItem
         ? state.requirements?.concat(newItem)
         : state.requirements;
      dispatch({
         type: OFFER.REQUIREMENTS,
         requirements: newRequirements,
      });
      setNewItem(void 0);
   };
   const onCancelClick = () => {
      prevState?.requirements && setState({
         type: LIST_CELL.REQUIREMENTS_UPDATE,
         requirements: prevState?.requirements,
      });
      setNewItem(void 0);
   };
   return (
      <ExpandableCell
         zIndex={zIndex || 1}
         onCancelClick={onCancelClick}
         onOkClick={onOkClick}
         width={CellWidth.Large}
      >
         {(expandableState) => (
            <RequirementsCellBody
               newItem={newItem}
               setNewItem={setNewItem}
               state={state}
               setState={setState}
               onOkClick={onOkClick}
               expandableState={expandableState}
            />
         )}
      </ExpandableCell>
   );
};

export default Requirements;

import React, { useState } from 'react';
import { Offer } from '../../../types/job';
import ExpandableCell from './Cells/ExpandableCell';
import TextAreaCellBody from './Cells/TextAreaCellBody';
import { OFFER } from '../LocalStore/types';
import { DispatchType } from '../types';
import { useMapPropsToState } from '../../../hooks/useMapPropsToState';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { expandableAction } from './Cells/localStore/actions';
import { CollectionProps } from './Cells/shared/types';

type NotesProps = CollectionProps & Pick<Offer, 'notes'>

const Notes = ({ dispatch, notes, zIndex }: NotesProps) => {
   const [noteState, setNoteState] = useMapPropsToState(notes);
   const prevState = usePrevProps(notes);
   const onOkClick = () => dispatch({
      type: OFFER.NOTES,
      notes: noteState,
   });
   return (
      <ExpandableCell
         zIndex={zIndex || 1}
         onOkClick={onOkClick}
         onCancelClick={() => setNoteState(prevState)}
      >
         {({ isDisabled, isExpanded, isActive, dispatch }) => (
            <TextAreaCellBody
               zIndex={zIndex || 1}
               value={noteState}
               onChange={setNoteState}
               isDisabled={!!isDisabled}
               isExpanded={!!isExpanded}
               isActive={!!isActive}
               setIsActive={(value) => dispatch(expandableAction.setIsActive(value))}
            />
         )}
      </ExpandableCell >
   );
};

export default Notes;

import React, { useState } from 'react';
import { Offer } from '../../../types/job';
import ExpandableCell from './Cells/ExpandableCell';
import TextAreaCellBody from './Cells/TextAreaCellBody';
import { OFFER } from '../LocalStore/types';
import { useMapPropsToState } from '../../../hooks/useMapPropsToState';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { CellWidth, CollectionProps } from './Cells/shared/types';

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
         width={CellWidth.Medium}
         zIndex={zIndex || 1}
         onOkClick={onOkClick}
         onCancelClick={() => setNoteState(prevState)}
      >
         {(expandableState) => (
            <TextAreaCellBody
               value={noteState}
               onChange={setNoteState}
               expandableState={expandableState}
            />
         )}
      </ExpandableCell >
   );
};

export default Notes;

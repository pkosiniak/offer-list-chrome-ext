import React, { useState } from 'react';
import { Offer } from '../../../types/job';
import ExpandableCell from '../../Cells/ExpandableCell/ExpandableCell';
import TextAreaCellBody from '../../Cells/ExpandableCell/TextAreaCell/TextAreaCellBody';
import { OFFER } from '../LocalStore/types';
import { useMapPropsToState } from '../../../hooks/useMapPropsToState';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { CellWidth, CollectionProps } from '../../Cells/shared/types';
import { TextAreaCell } from '../../Cells/ExpandableCell';

type NotesProps = CollectionProps & Pick<Offer, 'notes'>

const Notes = ({ dispatch, notes, zIndex }: NotesProps) => {
   const [noteState, setNoteState] = useMapPropsToState(notes);
   const prevState = usePrevProps(notes);
   const onOkClick = () => dispatch({
      type: OFFER.NOTES,
      notes: noteState,
   });
   return (
      <TextAreaCell
         value={noteState}
         onChange={setNoteState}
         width={CellWidth.Medium}
         zIndex={zIndex || 1}
         onOkClick={onOkClick}
         onCancelClick={() => setNoteState(prevState)}
      />
      // <ExpandableCell
      //    width={CellWidth.Medium}
      //    zIndex={zIndex || 1}
      //    onOkClick={onOkClick}
      //    onCancelClick={() => setNoteState(prevState)}
      // >
      //    {(expandableState) => (
      //       <TextAreaCellBody
      //          value={noteState}
      //          onChange={setNoteState}
      //          expandableState={expandableState}
      //       />
      //    )}
      // </ExpandableCell >
   );
};

export default Notes;

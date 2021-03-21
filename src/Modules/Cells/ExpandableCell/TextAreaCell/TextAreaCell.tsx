import React from 'react';
import { OFFER } from '../../../CellsCollection/LocalStore/types';
import { CollectionProps } from '../../shared/types';
import { WidthType } from '../../shared/types.parts';
import ExpandableCell, { ExpandableCellProps } from '../ExpandableCell';
import TextAreaCellBody, { TextAreaCellBodyProps } from './TextAreaCellBody';

interface TextAreaCellProps {

}
type TextAreaCellPropsType = TextAreaCellProps
   & ExpandableCellProps
   & TextAreaCellBodyProps


const TextAreaCell: React.FC<TextAreaCellPropsType> = ({
   width,
   zIndex,
   onOkClick,
   onCancelClick,
   value,
   onChange,
}) => {
   return (
      <ExpandableCell
         width={width}
         zIndex={zIndex}
         onOkClick={onOkClick}
         onCancelClick={onCancelClick}
      >
         {(expandableState) => (
            <TextAreaCellBody
               value={value}
               onChange={onChange}
               expandableState={expandableState}
            />
         )}
      </ExpandableCell>
   );
};

export default TextAreaCell;

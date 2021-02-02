import React from 'react';
import BasicCell from './BasicCell';
import * as P from './shared/parts';
import { CellWidth, WidthType } from './shared/types';

interface BasicCellProps extends WidthType {
   initValue?: string;
   setValue: (value: string) => void;
   readOnly?: boolean
}

const TextInputCell: React.FC<BasicCellProps> = ({
   width,
   initValue,
   setValue,
   readOnly,
}) => {
   return (
      <BasicCell
         readOnly={readOnly}
         setValue={setValue}
         onDelete={() => setValue('')}
         initValue={initValue}
         width={width || CellWidth.Default}
      >
         {({ disabled, setInputValue, inputValue }) => (
            <P.StyledTextInput
               readOnly={readOnly}
               value={inputValue as string || ''}
               width={width}
               disabled={disabled}
               onChange={({ target }) => setInputValue(target.value)}
            />
         )}
      </BasicCell>

   );
};

export default TextInputCell;

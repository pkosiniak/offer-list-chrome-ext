import React from 'react';
import { OptionType } from '../../../../Components/Input/Select/Select';
import BasicCell from '../BasicCell';
import * as P from '../../shared/parts';
import { CellWidth, WidthType } from '../../shared/types';

interface SelectCellProps extends WidthType {
   initValue?: string;
   setValue: (value: string) => void;
   options: OptionType[]
}

const SelectCell: React.FC<SelectCellProps> = ({
   width,
   initValue,
   options,
   setValue,
}) => {
   return (
      <BasicCell
         setValue={setValue}
         onDelete={() => setValue('')}
         initValue={initValue}
         width={width || CellWidth.Default}
      >
         {({ disabled, setInputValue, inputValue }) => (
            <P.StyledSelect
               value={inputValue as string}
               width={width}
               disabled={disabled}
               options={options}
               onChange={({ target }) => setInputValue(target.value)}
            />
         )}
      </BasicCell>

   );
};

export default SelectCell;

import React, { SetStateAction, useEffect, useState } from 'react';
import { usePrevProps } from '../../../../pages/utils/usePrevProps';
import BasicCell from './BasicCell';
import * as P from './shared/parts';
import { CellWidth, WidthType } from './shared/types';

interface DateCellProps extends WidthType {
   initValue?: Date;
   setValue: (value: Date | undefined) => void;
}

const DateCell: React.FC<DateCellProps> = ({
   width,
   initValue,
   setValue,
}) => {
   const date2string = (
      date?: Date,
   ) => {
      if (!date) return '';
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
   };

   const string2Date = (
      str?: string,
   ) => {
      if (!str) return;
      const split = str.split('.').map(item => +item);
      if (split.length !== 3) return;
      if (split[0] < 1 || split[0] > 31
         || split[1] < 1 || split[1] > 12
         || split[2] < 2020 || split[2] > 2021)
         return;
      const date = split.reverse();
      return new Date(date[0], date[1] - 1, date[2]);
   };

   const [input, setInput] = useState(date2string(initValue));
   const prevInit = usePrevProps(initValue);
   useEffect(() => {
      if (!initValue || initValue.getTime() === prevInit?.getTime()) return;
      setInput(date2string(initValue));
   }, [initValue]);

   const onDateChange = (
      value: string,
      setInputValue: (value: SetStateAction<string | Date | undefined>) => void,
   ) => {
      setInput(value);
      const date = string2Date(value);
      date && setInputValue(new Date(date));
   };

   return (
      <BasicCell
         setValue={setValue}
         onDelete={() => {
            setValue(void 0);
            setInput('');
         }}
         initValue={initValue}
         width={width || CellWidth.Default}
      >
         {({ disabled, setInputValue, inputValue }) => disabled
            ? (
               <P.StyledTextInput
                  disabled
                  value={inputValue && date2string(initValue) || ''}
                  width={width}
               />
            ) : (<>
               <P.StyledTextInput
                  width={(width || CellWidth.Default)}
                  value={input}
                  onChange={({ target }) => onDateChange(target.value, setInputValue)}
                  // pattern={/\d\d\.\d\d\.\d\d\d\d/.toString()}
                  maxLength={10}
               />
               <P.StyledDateInput
                  valueAsDate={inputValue as Date}
                  width={CellWidth.XSmall}
                  onChange={({ target }) => {
                     const date = new Date(target.value);
                     setInputValue(date);
                     setInput(date2string(date));
                  }}
               />
            </>)}
      </BasicCell >
   );
};

export default DateCell;

type State = { day?: number, month?: number, year?: number }
type Action = State & { type: 'DAY' | 'MONTH' | 'YEAR' | 'ALL' }

/*
<P.StyledNumberInput
                  width={CellWidth.XSmall}
                  value={day}
                  min={1}
                  max={31}
               />
               <P.StyledNumberInput
                  width={CellWidth.XSmall}
                  value={month}
                  min={1}
                  max={12}
               />
               <P.StyledNumberInput
                  width={CellWidth.XSmall}
                  value={year}
                  min={2020}
                  max={2021}
               />

*/
/*
  {({ disabled, setInputValue, inputValue }) => disabled
            ? (
               <P.StyledTextInput
                  disabled
                  value={inputValue && (inputValue as Date).toLocaleDateString() || ''}
                  width={width}
                  onChange={({ target }) => setInputValue(target.value)}
               />
            ) :
            (<>
               <P.StyledTextInput

               />
               <P.StyledDateInput
                  valueAsDate={inputValue as Date}
                  width={width}
                  onChange={({ target }) => setInputValue(new Date(target.value))}
               />
            </>)
         }
 */
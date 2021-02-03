import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useMapPropsToState } from '../../../../hooks/useMapPropsToState';
import { usePrevProps } from '../../../../hooks/usePrevProps';
import { onLongPress } from '../../../../utils/onLongPress';
import CancelButton from './components/CancelButton';
import DeleteButton from './components/DeleteButton';
import OkButton from './components/OkButton';
import * as P from './shared/parts';
import { BasicChildrenExportType, CellWidth, WidthType } from './shared/types';
import { ExtendableWidthProps } from './shared/types.parts';

type SetStringValueType = (value: string) => void;
type SetDateValueType = (value: Date) => void;
interface BasicCellProps extends Required<WidthType> {
   // width?: CellWidth | ((isDisabled: boolean) => CellWidth),
   initValue?: string | Date;
   setValue: SetStringValueType | SetDateValueType;
   onDelete?: () => void;
   children: (props: BasicChildrenExportType<string | Date>) => ReactNode;
   readOnly?: boolean
}

const BasicCell: React.FC<BasicCellProps> = ({
   width,
   initValue,
   setValue,
   onDelete,
   readOnly,
   children,
}) => {
   const [disabled, setDisabled] = useState(true);
   const onEditActive = () => { !readOnly && setDisabled(false); };
   const [inputValue, setInputValue] = useMapPropsToState(initValue);
   const prevValue = usePrevProps(initValue);
   const onOkClick = (value: Date | string) => typeof value === 'string'
      ? (setValue as SetStringValueType)(value)
      : (setValue as SetDateValueType)(value);
   const ref = useRef<HTMLDivElement>(null);
   const okRef = useRef<HTMLButtonElement>(null);
   const cancelRef = useRef<HTMLButtonElement>(null);
   const deleteRef = useRef<HTMLButtonElement>(null);
   useEffect(() => {
      const listener = (event: KeyboardEvent) => {
         // if (
         //    event.key !== 'Enter'
         //    && event.key !== 'q'
         //    && event.key !== 'Escape'
         //    && event.key !== 'Delete'
         // ) return;
         switch (event.key) {
            case 'Enter':
               return !event.ctrlKey && okRef.current?.click();
            case 'q':
               return event.ctrlKey && onEditActive();
            case 'Delete':
               return event.shiftKey && deleteRef.current?.click();
            case 'Escape':
               return cancelRef.current?.click();
            default:
               break;
         }
      };
      ref.current?.addEventListener('keyup', listener);
      return () => ref.current?.removeEventListener('keyup', listener);
   }, []);
   return (
      <P.Wrapper
         ref={ref}
         isDisabled
         horizontal
         width={width}
         extend={3}
         onDoubleClick={onEditActive}
         {...onLongPress(onEditActive, 1000)}
      >
         {children({
            disabled,
            inputValue,
            setInputValue,
         })}
         {!readOnly && (<>
            <OkButton
               ref={okRef}
               isDisabled={disabled}
               setIsDisabled={setDisabled}
               onClickCallback={() => {
                  inputValue !== undefined && onOkClick(inputValue);
               }}
            />
            <CancelButton
               ref={cancelRef}
               isDisabled={disabled}
               setIsDisabled={setDisabled}
               onClickCallback={() => setInputValue(prevValue)}
            />
            {!disabled && <DeleteButton
               ref={deleteRef}
               confirmMsg={'Delete value?'}
               deleteAction={onDelete ? onDelete : () => setInputValue(void 0)}
            />}
         </>)}
      </P.Wrapper>
   );
};

export default BasicCell;

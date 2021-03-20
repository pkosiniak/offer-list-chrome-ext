import React, { ReactNode, useEffect, useRef } from 'react';
import { useRefEffect } from '../../../../hooks/useRefEffect';
import { onLongPress } from '../../../../utils/onLongPress';
import OkButton from './components/OkButton';
import * as P from './shared/parts';
import { ExpandableCellState, WidthType } from './shared/types';
import CancelButton from './components/CancelButton';
import { expandableStateReducer } from './localStore/reducers';
import { expandableAction } from './localStore/actions';
import { usePrevProps } from '../../../../hooks/usePrevProps';
import { useCreateLocalStore } from '../../../../hooks/useReducerLogger';
const { setRefHeight, setIsDisabled, setIsExpanded, setIsActive } = expandableAction;

type ExpandableOptions = {
   expandButtonHidden?: boolean,
}

interface ExpandableCellProps extends Required<WidthType> {
   onOkClick: () => void,
   onCancelClick: () => void,
   zIndex: number,
   className?: string,
   children: (expandableState: ExpandableCellState) => ReactNode,
   options?: ExpandableOptions,
}


const ExpandableCell: React.FC<ExpandableCellProps> = ({
   onOkClick,
   onCancelClick,
   width,
   zIndex,
   className,
   options,
   children,
}) => {
   const { expandButtonHidden = false } = options || {};
   const [state, dispatch] = useCreateLocalStore(
      expandableStateReducer,
      {
         isActive: false,
         isExpanded: false,
         isDisabled: true,
         refHeight: undefined,
      },
      { useLogger: false },
   );
   const [ref] = useRefEffect<number, HTMLDivElement>(
      (ref) => dispatch(setRefHeight(
         ref.current?.getBoundingClientRect().height,
      )),
   );
   const prevState = usePrevProps(state);

   const { isActive, isDisabled, isExpanded, refHeight } = state;
   const onEditActivate = () => {
      dispatch(setIsDisabled(false));
      expandButtonHidden && dispatch(setIsExpanded(true));
   };
   useEffect(() => {
      dispatch(setIsActive(!isDisabled));
      expandButtonHidden && dispatch(setIsExpanded(!isDisabled));
   }, [isDisabled]);

   const okRef = useRef<HTMLButtonElement>(null);
   const cancelRef = useRef<HTMLButtonElement>(null);
   const deleteRef = useRef<HTMLButtonElement>(null);
   useEffect(() => {
      const listener = (event: KeyboardEvent) => {
         // console.log(event);
         switch (event.key) {
            case 'Enter':
               return !event.ctrlKey && okRef.current?.click();
            case 'q':
               return event.ctrlKey && onEditActivate();
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

   const useExpandableState: ExpandableCellState = {
      ...state,
      prevState,
      dispatch,
      zIndex,
      width,
   };

   return (
      <P.Wrapper
         horizontal
         width={width}
         className={className}
         extend={1}
         isDisabled={!!isDisabled}
         ref={ref}
      // onFocus={() => console.log('focus')}
      // onFocusCapture={() => console.log('focus capture')}
      >
         <P.Placeholder
            width={width}
            isDisabled={!!isDisabled}
         />
         <P.AbsoluteWrapper
            width={width}
            isExpanded={!!isExpanded}
            isDisabled={!!isDisabled}
            onDoubleClick={onEditActivate}
            {...onLongPress(onEditActivate, 1000)}
            style={{ minHeight: refHeight }}
         >
            <P.ExpandableWrapper>
               {children(useExpandableState)}
            </P.ExpandableWrapper>
         </P.AbsoluteWrapper>
         <OkButton
            ref={okRef}
            isDisabled={isDisabled}
            isActive={isActive}
            setIsDisabled={(value) => dispatch(setIsDisabled(value))}
            onClickCallback={onOkClick}
         />
         <CancelButton
            ref={cancelRef}
            isDisabled={isDisabled}
            isActive={isActive}
            setIsDisabled={(value) => dispatch(setIsDisabled(value))}
            onClickCallback={onCancelClick}
         />
         <P.ExpandButton
            style={{ display: expandButtonHidden ? 'none' : void 0 }}
            onClick={() => dispatch(setIsExpanded(!isExpanded))}
            text={isExpanded ? '∆' : '∇'}
         />
      </P.Wrapper>
   );
};

export default ExpandableCell;


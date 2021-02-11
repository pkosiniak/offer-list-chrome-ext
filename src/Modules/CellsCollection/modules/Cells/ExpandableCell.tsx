import React, { ReactNode, useEffect, useReducer, useRef } from 'react';
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

interface ExpandableCellProps extends WidthType {
   onOkClick: () => void,
   onCancelClick: () => void,
   zIndex: number,
   className?: string,
   children: (exportProps: ExpandableCellState) => ReactNode,
}

const ExpandableCell: React.FC<ExpandableCellProps> = ({
   onOkClick,
   onCancelClick,
   width,
   zIndex,
   className,
   children,
}) => {
   const [state, dispatch] = useReducer(expandableStateReducer, {
      isActive: false,
      isExpanded: false,
      isDisabled: true,
      refHeight: undefined,
   });
   const [ref] = useRefEffect<number, HTMLDivElement>(
      (ref) => dispatch(setRefHeight(
         ref.current?.getBoundingClientRect().height,
      )),
   );
   const prevState = usePrevProps(state);

   const { isActive, isDisabled, isExpanded, refHeight } = state;
   const onEditActivate = () => dispatch(setIsDisabled(false));
   useEffect(() => {
      dispatch(setIsActive(!isDisabled));
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
               {children({ ...state, dispatch, prevState, zIndex, width })}
            </P.ExpandableWrapper>
         </P.AbsoluteWrapper>
         <OkButton
            isDisabled={isDisabled}
            isActive={isActive}
            setIsDisabled={(value) => dispatch(setIsDisabled(value))}
            onClickCallback={onOkClick}
         />
         <CancelButton
            isDisabled={isDisabled}
            isActive={isActive}
            setIsDisabled={(value) => dispatch(setIsDisabled(value))}
            onClickCallback={onCancelClick}
         />
         <P.ExpandButton
            onClick={() => dispatch(setIsExpanded(!isExpanded))}
            text={isExpanded ? '∆' : '∇'}
         />
      </P.Wrapper>
   );
};

export default ExpandableCell;


/*

interface ExpandableCellProps extends WidthType {
   onOkClick: () => void,
   onCancelClick: () => void,
   children: (exportProps: ChildrenExportType) => ReactNode,
}

const ExpandableCell: React.FC<ExpandableCellProps> = ({
   onOkClick,
   onCancelClick,
   width,
   children,
}) => {
   // const [isDisabled, setDisabled] = useState(true);
   // const [isExpanded, setIsExpanded] = useState(false);
   // const [isActive, setIsActive] = useState(false);
   // const [ref, refHeight] = useRefEffect<number, HTMLDivElement>(
   //    (ref, setRefHeight) => setRefHeight(ref.current?.getBoundingClientRect().height),
   // );
   const [state, dispatch] = useReducer(expandableStateReducer, {
      isActive: false,
      isExpanded: false,
      isDisabled: true,
      refHeight: undefined,
   });
   const [ref] = useRefEffect<number, HTMLDivElement>(
      (ref) => dispatch(setRefHeight(
         ref.current?.getBoundingClientRect().height,
      )),
   );

   const { isActive, isDisabled, isExpanded, refHeight } = state;
   const onEditActivate = () => dispatch(setIsDisabled(false));

   return (
      <P.Wrapper
         horizontal
         width={width}
         isDisabled={!!isDisabled}
         ref={ref}
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
         >
            <P.ExpandableWrapper>
               {children({
                  disabled: isDisabled,
                  setDisabled,
                  isExpanded,
                  isActive,
                  setIsActive,
                  refHeight,
               })}
            </P.ExpandableWrapper>
         </P.AbsoluteWrapper>
         <OkButton
            disabled={isDisabled}
            isActive={isActive}
            setDisabled={(value) => dispatch(setIsDisabled(value))}
            onClickCallback={onOkClick}
         />
         <CancelButton
            disabled={isDisabled}
            isActive={isActive}
            setDisabled={(value) => dispatch(setIsDisabled(value))}
            onClickCallback={onCancelClick}
         />
         <P.ExpandButton
            onClick={() => dispatch(setIsExpanded(!isExpanded))}
            text={isExpanded ? '∆' : '∇'}
         />
      </P.Wrapper>
   );
};

export default ExpandableCell;

*/
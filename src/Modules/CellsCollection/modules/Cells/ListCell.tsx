import React, { PropsWithChildren, ReactNode } from 'react';
import * as P from './shared/parts';
import ListActions from './ListAction';
import { ExpandableCellState } from './shared/types';
import { expandableAction } from './localStore/actions';

type SetActionCallback<T> = (item: T, index: number, list: T[]) => void
type DeleteActionCallback<T> = (index: number, list: T[]) => void

interface LinkCellBodyProps<T> extends ExpandableCellState {
   onOkClick: () => void,
   onAddNewItemClick: () => void,
   list?: T[]
   newItem?: T,
   setItem: SetActionCallback<T>;
   deleteItem: DeleteActionCallback<T>,
   setNewItem: (value: T) => void,
   deleteNewItem: () => void,
   children: (
      item: T,
      setItem: (item: T) => void,
      deleteItem: () => void,
      index: number,
      list: T[]
   ) => ReactNode,
}

const LinkCellBody: React.FC<LinkCellBodyProps<any>> = ({
   list,
   setItem,
   deleteItem,
   newItem,
   setNewItem,
   deleteNewItem,
   onAddNewItemClick,
   onOkClick,
   zIndex,
   children,
   ...expandableState
}) => {
   const {
      isExpanded,
      isDisabled,
      isActive,
      refHeight,
      dispatch,
   } = expandableState;
   return (
      <P.ULWrapper
         height={refHeight}
         isExpanded={!!isExpanded}
         isDisabled={!!isDisabled}
         isActive={!!isActive}
         onFocus={() => dispatch(expandableAction.setIsActive(true))}
         onBlur={() => dispatch(expandableAction.setIsActive(false))}
         style={{ zIndex: isActive ? zIndex + 2 : zIndex }}
      >
         <P.StyledUL
            isDisabled={!!isDisabled}
            isExpanded={!!isExpanded}
            items={
               list?.map((item, index, list) =>
                  children(
                     item,
                     (value) => setItem(value, index, list),
                     () => deleteItem(index, list),
                     index,
                     list,
                  ),
               ) || []
            }
         >
            {!isDisabled && (
               <ListActions
                  newItem={!!newItem}
                  onAddClick={onAddNewItemClick}
                  onOkClick={onOkClick}
                  isActive={isActive}
                  setIsDisabled={() => dispatch(expandableAction.setIsDisabled(true))}
               >
                  {!!newItem && children(
                     newItem,
                     (value) => setNewItem(value),
                     () => deleteNewItem(),
                     (list?.length || 0) + 1,
                     [],
                  )}
               </ListActions>
            )}
         </P.StyledUL>
      </P.ULWrapper>
   );
};

export default LinkCellBody;
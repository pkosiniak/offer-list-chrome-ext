import React, { ReactNode } from 'react';
import * as P from '../../shared/parts';
import { ListState, WithExpandableState } from '../../shared/types';
import ListActions from './ListAction';
import { expandableAction } from '../../localStore/actions';

export type SetActionCallback<T> = (list: T[], index: number, item: T,) => void
export type DeleteActionCallback<T> = (list: T[], index: number) => void
export type ListItemChildren<T> = { children: (listState: ListState<T>) => ReactNode }

export interface ListCellBodyProps<T> {
   onOkClick: () => void,
   onAddNewItemClick: () => void,
   list?: T[]
   newItem?: T,
   setItem: SetActionCallback<T>;
   deleteItem: DeleteActionCallback<T>,
   setNewItem: (value: T) => void,
   deleteNewItem: () => void,
}

type ListCellBodyPropsType<T> = ListCellBodyProps<T>
   & ListItemChildren<T>
   & WithExpandableState

const ListCellBody = <T,>({
   list,
   setItem,
   deleteItem,
   newItem,
   setNewItem,
   deleteNewItem,
   onAddNewItemClick,
   onOkClick,
   children,
   expandableState,
}: ListCellBodyPropsType<T>) => {
   const {
      isExpanded,
      isDisabled,
      isActive,
      refHeight,
      dispatch,
      zIndex,
   } = expandableState;

   const createListState = (
      item: T,
      index: number,
      list: T[],
      setItem: SetActionCallback<T>,
      deleteItem: DeleteActionCallback<T>,
   ): ListState<T> => ({
      item,
      index,
      list,
      setItem: (value) => setItem(list, index, value),
      deleteItem: () => deleteItem(list, index),
   });

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
               (list || []).map((item, index, list) => children(
                  createListState(item, index, list, setItem, deleteItem),
               ))
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
                  {!!newItem && children(createListState(
                     newItem,
                     (list?.length || 0) + 1,
                     [],
                     (_, __, newItem) => setNewItem(newItem),
                     deleteNewItem,
                  ))}
               </ListActions>
            )}
         </P.StyledUL>
      </P.ULWrapper>
   );
};

export default ListCellBody;
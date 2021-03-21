import React, { ReactNode } from 'react';
import { ExpandableState } from '../../localStore/types';
import { ExpandableCellState, ListState } from '../../shared/types';
import ExpandableCell, { ExpandableCellProps } from '../ExpandableCell';
import ListCellBody, { ListCellBodyProps } from './ListCellBody';

interface ListCellProps<T> {
   children: (
      listState: ListState<T>,
      expandableState: ExpandableCellState
   ) => ReactNode,
}

type ListCellPropsType<T> = ExpandableCellProps
   & ListCellBodyProps<T>
   & ListCellProps<T>


const ListCell = <T,>({
   width,
   zIndex,
   onOkClick,
   onCancelClick,
   list,
   setItem,
   deleteItem,
   newItem,
   setNewItem,
   deleteNewItem,
   onAddNewItemClick,
   children,
}: ListCellPropsType<T>) => {
   return (
      <ExpandableCell
         width={width}
         zIndex={zIndex}
         onOkClick={onOkClick}
         onCancelClick={onCancelClick}
      >
         {(expandableState) => (
            <ListCellBody
               list={list}
               setItem={setItem}
               deleteItem={deleteItem}
               newItem={newItem}
               setNewItem={setNewItem}
               deleteNewItem={deleteNewItem}
               onAddNewItemClick={onAddNewItemClick}
               onOkClick={onOkClick}
               expandableState={expandableState}
            >
               {(listState) => children(listState, expandableState)}
            </ListCellBody>
         )}
      </ExpandableCell>
   );
};

export default ListCell;

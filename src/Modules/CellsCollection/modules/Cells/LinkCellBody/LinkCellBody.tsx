import React, { Dispatch, useEffect, useReducer, useState } from 'react';
import { OfferLink } from '../../../../../types/job';
import * as T from '../localStore/types';
import { deleteItemAtIndex, replaceItemAtIndex } from '../../../../../utils/arrayReplaceRemove';
import LinkListItem from './LinkListItem';
import { CellWidth, ChildrenExportType, ListCellBodyProps } from '../shared/types';
import * as P from '../shared/parts';
import ListCell from '../ListCell';
import { getHostnameFromUrl } from '../../../../../utils/getHostnameFromUrl';

type LinkCellBodyProps = ListCellBodyProps<
   OfferLink,
   T.LinkCellState,
   T.LinkCellAction
>

const LinkCellBody: React.FC<LinkCellBodyProps> = ({
   state,
   setState,
   newItem,
   setNewItem,
   onOkClick,
   children: _,
   ...expandableState
}) => {
   const setItem = (
      link: OfferLink, index: number, links: OfferLink[],
   ) => setState({
      type: T.LIST_CELL.LINK_UPDATE,
      links: replaceItemAtIndex(
         links,
         index,
         link,
      ),
   });

   return (
      <ListCell
         list={state.links}
         setItem={setItem}
         deleteItem={() => (links: OfferLink[], index: number) => setState({
            type: T.LIST_CELL.LINK_UPDATE,
            links: deleteItemAtIndex(links, index),
         })}
         newItem={newItem}
         setNewItem={setNewItem}
         deleteNewItem={() => setNewItem(void 0)}
         onAddNewItemClick={() => setNewItem({ url: '', name: '', isAvailable: true })}
         onOkClick={onOkClick}
         {...expandableState}
      >
         {(link, setLink, deleteDelete) => (
            <LinkListItem
               link={link as OfferLink}
               setLink={setLink}
               deleteLink={deleteDelete}
               width={expandableState.width || CellWidth.Default}
               {...expandableState}
            />
         )}
      </ListCell>
   );
};

export default LinkCellBody;

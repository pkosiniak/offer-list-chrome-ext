import React from 'react';
import { OfferLink } from '../../../../../types/job';
import * as T from '../localStore/types';
import { deleteItemAtIndex, replaceItemAtIndex } from '../../../../../utils/arrayReplaceRemove';
import LinkListItem from './LinkListItem';
import { ListCellBodyProps } from '../shared/types';
import ListCell, { DeleteActionCallback, SetActionCallback } from '../ListCell';

type LinkCellBodyProps = ListCellBodyProps<
   OfferLink,
   T.LinkCellState
>

const LinkCellBody: React.FC<LinkCellBodyProps> = ({
   state,
   setState,
   newItem,
   setNewItem,
   onOkClick,
   expandableState,
}) => {
   const setItem: SetActionCallback<OfferLink> = (
      links, index, link,
   ) => setState(replaceItemAtIndex(links, index, link));

   const deleteItem: DeleteActionCallback<OfferLink> = (
      links, index,
   ) => setState(deleteItemAtIndex(links, index));

   return (
      <ListCell
         list={state.links}
         setItem={setItem}
         deleteItem={deleteItem}
         newItem={newItem}
         setNewItem={setNewItem}
         deleteNewItem={() => setNewItem(void 0)}
         onAddNewItemClick={() => setNewItem({ url: '', name: '', isAvailable: true })}
         onOkClick={onOkClick}
         expandableState={expandableState}
      >
         {({ item, setItem, deleteItem }) => (
            <LinkListItem
               link={item}
               setLink={setItem}
               deleteLink={deleteItem}
               {...expandableState}
            />
         )}
      </ListCell>
   );
};

export default LinkCellBody;

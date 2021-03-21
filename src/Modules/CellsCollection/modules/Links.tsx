import React, { useState } from 'react';
import { Offer, OfferLink } from '../../../types/job';
import { OFFER } from '../LocalStore/types';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { CellWidth, CollectionProps } from '../../Cells/shared/types';
import { ListCell } from '../../Cells/ExpandableCell';
import LinkListItem from './LinkCellItem/LinkListItem';
import { DeleteActionCallback, SetActionCallback } from '../../Cells/ExpandableCell/ListCell/ListCellBody';
import { replaceItemAtIndex, deleteItemAtIndex } from '../../../utils/arrayReplaceRemove';
import { useMapPropsToState } from '../../../hooks/useMapPropsToState';

type LinksProps = CollectionProps & Pick<Offer, 'links'>;

const Links = ({ dispatch, zIndex, links: offerLinks }: LinksProps) => {
   // const [state, setState] = useReducerEffect(
   //    linkCellReducer,
   //    { links: links || [] },
   //    { type: LIST_CELL.LINK_UPDATE, links },
   // );
   const [links, setLinks] = useMapPropsToState(offerLinks);
   const prevLinks = usePrevProps(offerLinks);
   const [newItem, setNewItem] = useState<OfferLink>();

   const onOkClick = () => {
      const newLinks = newItem
         ? links?.concat(newItem)
         : links;
      dispatch({
         type: OFFER.LINKS,
         links: newLinks,
      });
      setNewItem(void 0);
   };
   // const dispatchLinks = (
   //    links: OfferLink[],
   // ) => setLinks(links);

   const onCancelClick = () => {
      prevLinks && setLinks(prevLinks);
      setNewItem(void 0);
   };

   const setItem: SetActionCallback<OfferLink> = (
      links, index, link,
   ) => setLinks(replaceItemAtIndex(links, index, link));

   const deleteItem: DeleteActionCallback<OfferLink> = (
      links, index,
   ) => setLinks(deleteItemAtIndex(links, index));

   return (
      <ListCell
         list={links}
         setItem={setItem}
         deleteItem={deleteItem}
         newItem={newItem}
         setNewItem={setNewItem}
         deleteNewItem={() => setNewItem(void 0)}
         onAddNewItemClick={() => setNewItem({ url: '', name: '', isAvailable: true })}
         onOkClick={onOkClick}
         onCancelClick={onCancelClick}
         zIndex={zIndex || 1}
         width={CellWidth.Large}
      >
         {(listState, expandableState) => (
            <LinkListItem
               link={listState.item}
               setLink={listState.setItem}
               deleteLink={listState.deleteItem}
               {...expandableState}
            />
         )}
      </ListCell>
      // <ExpandableCell
      //    onCancelClick={onCancelClick}
      //    onOkClick={onOkClick}
      //    zIndex={zIndex || 1}
      //    width={CellWidth.Large}
      // >
      //    {(expandableState) => (
      //       <LinkCellBody
      //          state={state}
      //          setState={dispatchLinks}
      //          newItem={newItem}
      //          setNewItem={setNewItem}
      //          onOkClick={onOkClick}
      //          expandableState={expandableState}
      //       />
      //    )}
      // </ExpandableCell>
   );
};

export default Links;

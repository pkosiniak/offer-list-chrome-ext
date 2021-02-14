import React, { useEffect, useReducer, useState } from 'react';
import { useReducerEffect } from '../../../hooks/useReducerEffect';
import { Offer, OfferLink } from '../../../types/job';
import ExpandableCell from './Cells/ExpandableCell';
import LinkCellBody from './Cells/LinkCellBody/LinkCellBody';
import { linkCellReducer } from './Cells/localStore/reducers';
import { LIST_CELL } from './Cells/localStore/types';
import { OFFER } from '../LocalStore/types';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { CellWidth, CollectionProps } from './Cells/shared/types';

type LinksProps = CollectionProps & Pick<Offer, 'links'>;

const Links = ({
   dispatch,
   zIndex,
   links,
}: LinksProps) => {
   const [state, setState] = useReducerEffect(
      linkCellReducer,
      { links: links || [] },
      { type: LIST_CELL.LINK_UPDATE, links },
   );
   const prevState = usePrevProps(state);
   const [newItem, setNewItem] = useState<OfferLink>();

   const onOkClick = () => {
      const newLinks = newItem
         ? state.links?.concat(newItem)
         : state.links;
      dispatch({
         type: OFFER.LINKS,
         links: newLinks,
      });
      setNewItem(void 0);
   };
   const onCancelClick = () => {
      prevState?.links && setState({
         type: LIST_CELL.LINK_UPDATE,
         links: prevState?.links,
      });
      setNewItem(void 0);
   };
   return (
      <ExpandableCell
         onCancelClick={onCancelClick}
         onOkClick={onOkClick}
         zIndex={zIndex || 1}
         width={CellWidth.Large}
      >
         {(expandableState) => (
            <LinkCellBody
               state={state}
               setState={setState}
               newItem={newItem}
               setNewItem={setNewItem}
               onOkClick={onOkClick}
               expandableState={expandableState}
            />
         )}
      </ExpandableCell>
   );
};

export default Links;

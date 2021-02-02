import React from 'react';
import Box from '../../../../../Components/Box/Box';
import { OfferLink } from '../../../../../types/job';
import EditLinkItem from './EditLinkItem';
import { ListItemPickFromExpandable } from '../shared/types';
import DisableLinkItem from './DisableLinkItem';

interface ItemProps extends ListItemPickFromExpandable {
   link: OfferLink,
   setLink: (link: OfferLink) => void,
   // index: number,
   deleteLink: () => void
}

const LinkListItem = ({ link, setLink, deleteLink, isDisabled, isExpanded, width }: ItemProps) => isDisabled
   ? (
      <DisableLinkItem {...link} />
   ) : (
      <EditLinkItem
         width={width}
         link={link}
         setLink={setLink}
         deleteLink={deleteLink}
         isExpanded={isExpanded}
      />
   );

export default LinkListItem;
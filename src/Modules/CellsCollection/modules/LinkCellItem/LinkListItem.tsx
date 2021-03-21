import React from 'react';
import { OfferLink } from '../../../../types/job';
import EditLinkItem from './EditLinkItem';
import { ListItemPickFromExpandable } from '../../../Cells/shared/types';
import DisabledLinkItem from './DisableLinkItem';

interface ItemProps extends ListItemPickFromExpandable {
   link: OfferLink,
   setLink: (link: OfferLink) => void,
   deleteLink: () => void
}

const LinkListItem = ({
   link,
   setLink,
   deleteLink,
   isDisabled,
   isExpanded,
   width,
}: ItemProps) => isDisabled
   ? (
      <DisabledLinkItem {...link} />
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
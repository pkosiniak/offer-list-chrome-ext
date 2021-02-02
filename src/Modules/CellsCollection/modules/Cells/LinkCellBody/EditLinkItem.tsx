import React, { } from 'react';
import { OfferLink } from '../../../../../types/job';
import DeleteButton from '../components/DeleteButton';
import { PickExpandableCellStateIsExpandedAndWidth } from '../shared/types';
import * as P from '../shared/parts';
import { getHostnameFromUrl } from '../../../../../pages/utils/getHostnameFromUrl';

interface EditLinkItemProps extends PickExpandableCellStateIsExpandedAndWidth {
   link: OfferLink,
   setLink: (link: OfferLink) => void,
   deleteLink: () => void,
}

const EditLinkItem: React.FC<EditLinkItemProps> = ({
   link,
   setLink,
   isExpanded,
   width,
   deleteLink,
}) => {
   const { url, name, isAvailable } = link;


   return (
      <P.InputEditorWrapper
         vertical
         width={width}
      >
         <P.StyledTextArea
            autoResize={!!isExpanded}
            isExpanded={!!isExpanded}
            value={url}
            onChange={({ target }) => setLink({ ...link, url: target.value, name: link.name || getHostnameFromUrl(target.value, 'link') })}
         />
         <P.StyledTextInput
            width={width}
            value={name || getHostnameFromUrl(url, 'link')}
            onChange={({ target }) => setLink({ ...link, name: target.value })}
         />
         <P.SpaceWrapper h>
            <P.StyledCheckbox
               label={'Is active?'}
               checked={!!isAvailable}
               onChange={() => {
                  setLink({ ...link, isAvailable: !isAvailable });
               }}
            />
            <DeleteButton
               confirmMsg={'Delete Link?'}
               deleteAction={deleteLink}
            />
         </P.SpaceWrapper>
      </P.InputEditorWrapper>
   );
};

export default EditLinkItem;

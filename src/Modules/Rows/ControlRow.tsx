import React from 'react';
import Button from '../../Components/Button/Button';
import { OfferList } from '../../types/job';
import { MESSAGE_TYPE, SenderType } from '../../types/message';
import { messageSender } from '../../utils/messages/messageSender';
import { SendToOption } from '../../utils/messages/types';
import { DownloadButton } from '../InteractiveButtons/DownloadButton';
import RestoreButton from '../InteractiveButtons/RestoreButton';
import * as P from './parts';

interface AddRowProps {
   sender: SenderType,
   offerList: OfferList
}


const ControlRow: React.FC<AddRowProps> = ({ sender, offerList }) => {
   return (
      <P.Wrapper>
         <Button
            key={'addRowButton'}
            text={'➕ Row'}
            onClick={() => {
               messageSender(
                  MESSAGE_TYPE.OFFER_LIST_APPEND,
                  { ...sender, requireException: true },
                  {},
                  SendToOption.Runtime,
               );
               setTimeout(() => {
                  document.getElementById('globalWrapper')?.scrollBy(0, 40);
               });
            }}
         />
         <Button
            key={'refreshRowButton'}
            text={'↻ Refresh'}
            onClick={() => messageSender(
               MESSAGE_TYPE.OFFER_LIST_GET,
               { ...sender, requireException: true },
               void 0,
               SendToOption.Runtime,
            )}
         />
         <DownloadButton
            offerList={offerList}
         />
         <RestoreButton sender={sender} />
      </P.Wrapper>
   );
};

export default ControlRow;

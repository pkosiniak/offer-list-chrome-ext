import React from 'react';
import Box from '../../../Components/Box/Box';
import Button from '../../../Components/Button/Button';
import Row from '../../../Components/Table/Row';
import { OfferList } from '../../../types/job';
import { MESSAGE_TYPE, SenderType } from '../../../types/message';
import { messageSender } from '../../../utils/messages/messageSender';
import { SendToOption } from '../../../utils/messages/types';
import { Download } from './Download';

interface AddRowProps {
   sender: SenderType,
   offerList: OfferList
}

const ControlRow: React.FC<AddRowProps> = ({ sender, offerList }) => {
   return (
      <Box>
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
         <Download
            offerList={offerList}
         />
      </Box>
   );
};

export default ControlRow;

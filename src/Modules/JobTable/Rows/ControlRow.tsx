import React from 'react';
import styled from 'styled-components';
import Box from '../../../Components/Box/Box';
import Button from '../../../Components/Button/Button';
import { OfferList } from '../../../types/job';
import { MESSAGE_TYPE, SenderType } from '../../../types/message';
import { messageSender } from '../../../utils/messages/messageSender';
import { SendToOption } from '../../../utils/messages/types';
import { Download } from './Download';
import RestoreButton from './RestoreButton';

interface AddRowProps {
   sender: SenderType,
   offerList: OfferList
}

const Wrapper = styled(Box)`
   margin: 4px 0;
`;

const ControlRow: React.FC<AddRowProps> = ({ sender, offerList }) => {
   return (
      <Wrapper>
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
         <RestoreButton sender={sender} />
      </Wrapper>
   );
};

export default ControlRow;

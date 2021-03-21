import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../../Components/Button/Button';
import FileInput from '../../Components/Input/FileInput/FileInput';
import { useID } from '../../hooks/useID';
import { ExportOfferList } from '../../types/job';
import { MESSAGE_TYPE, SenderType } from '../../types/message';
import { messageSender } from '../../utils/messages/messageSender';
import * as P from './parts';


interface RestoreButtonProps {
   sender: SenderType
}

const RestoreButton: React.FC<RestoreButtonProps> = ({ sender }) => {
   const ref = useRef<HTMLLabelElement>(null);
   const ID = useID({ prefix: 'fileInput' });
   return (
      <P.Label ref={ref} htmlFor={ID}>
         <Button
            text={'↺ Restore'}
            onClick={() => ref.current?.click()}
         >
         </Button>
         <FileInput
            id={ID}
            style={{ display: 'none' }}
            onChange={async event => {
               const file = event.target.files?.item(0);
               if (!file) return;
               const data = await file.text();

               messageSender(
                  MESSAGE_TYPE.OFFER_LIST_SET,
                  { ...sender, requireException: true },
                  (JSON.parse(data) as ExportOfferList).offerList,
                  {
                     toRuntime: true,
                  },
               );
            }}
         />
      </P.Label>
   );
};

export default RestoreButton;

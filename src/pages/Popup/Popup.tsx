import React, { useRef, useState } from 'react';
import { MESSAGE_TYPE, OriginType, SenderType } from '../../types/message';
import { messageSender } from '../../utils/messages/messageSender';
import { useUUID } from '../../hooks/useUUID';
// import './Popup.css';
import * as P from './parts';
import TextInput from '../../Components/Input/TextInput/TextInput';
import Box from '../../Components/Box/Box';
import Button from '../../Components/Button/Button';
import CopyButton from './CopyButton/CopyButton';


const useSender = (originType: OriginType): SenderType => {
   const UUID = useUUID();
   return {
      uuid: UUID,
      originType,
   };
};

const Popup = () => {
   const sender = useSender(OriginType.Popup);
   const sendGetOfferInfo = () => messageSender(
      MESSAGE_TYPE.GET_OFFER_INFO,
      sender,
      void 0,
      { toActiveTab: true },
   );

   const sendShowOfferInfoRow = () => messageSender(
      MESSAGE_TYPE.SHOW_OFFER_INFO_ROW,
      sender,
      void 0,
      { toActiveTab: true },
   );

   const linkedInRef = useRef<HTMLInputElement>(null);
   const githubRef = useRef<HTMLInputElement>(null);

   const [linkedInCopy, setLinkedInCopy] = useState(false);
   const [githubCopy, seGithubCopy] = useState(false);

   return (
      <P.Wrapper v>
         <P.ActionButton text={'SHOW OFFER ROW'} onClick={() => sendShowOfferInfoRow()} />
         <Box h>
            <TextInput
               ref={linkedInRef}
               readOnly
               label={'LinkedIn'}
               defaultValue={'https://www.linkedin.com/in/pawel-kosiniak/'}
            />
            <CopyButton
               onClick={() => {
                  linkedInRef.current?.select();
                  document.execCommand('copy');
                  setLinkedInCopy(true);
                  seGithubCopy(false);
               }}
               isCopied={linkedInCopy}
            />
         </Box>
         <Box h>
            <TextInput
               ref={githubRef}
               readOnly
               label={'GitHub'}
               defaultValue={'https://github.com/pkosiniak'}
            />
            <CopyButton 
               onClick={() => {
                  githubRef.current?.select();
                  document.execCommand('copy');
                  setLinkedInCopy(false);
                  seGithubCopy(true);
               }}
               isCopied={githubCopy}
            />
            {/* <Button
               
            >
               {'📄'}
               <span style={{ position: 'relative', top: 4, left: -12 }}>{'📄'}</span>
               {githubCopy && <span style={{ color: '#0f0', position: 'absolute', marginLeft: -20 }}>{'✔'}</span>}

            </Button> */}
         </Box>
      </P.Wrapper>
   );
};

export default Popup;

import React from 'react';
import { MESSAGE_TYPE, OriginType, SenderType } from '../../types/message';
import { messageSender } from '../../utils/messages/messageSender';
import { useUUID } from '../utils/useUUID';
// import './Popup.css';
import * as P from './parts';


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

   return (
      <P.Wrapper v>
         <P.ActionButton text={'GET DETAILS'} onClick={() => sendGetOfferInfo()} />
         <P.ActionButton text={'SHOW OFFER ROW'} onClick={() => sendShowOfferInfoRow()} />
         <P.ActionButton text={'RESTORE BACKUP'} onClick={() => messageSender(
            MESSAGE_TYPE.RESTORE_BACKUP,
            sender,
            void 0,
         )} />
      </P.Wrapper>
   );
};

export default Popup;

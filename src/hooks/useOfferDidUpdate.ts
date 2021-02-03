import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Job, OfferList } from '../types/job';
import { Message, MESSAGE_TYPE, OriginType, PartialMessage, SenderType, UUIDType } from '../types/message';
import { messageSender } from '../utils/messages/messageSender';
import { messageListener } from '../utils/messages/messageListener';
import { useUUID } from './useUUID';


export const useOfferListDidUpdate = (
   originType: OriginType, uuid?: UUIDType,
): [OfferList, SenderType, Dispatch<SetStateAction<OfferList>>] => {
   const [sender] = useState<SenderType>({ originType, uuid: useUUID(uuid) });
   const [offerList, setOfferList] = useState<OfferList>([]);
   useEffect(() => {
      const listener = (message: Message<OfferList | string>) => {
         const { type, sender: origin, message: msg } = message;
         if (type !== MESSAGE_TYPE.OFFER_LIST_DID_UPDATE)
            return;
         if (!origin.originalSender?.requireException && origin.originalSender?.uuid === sender.uuid)
            return;
         if (typeof msg === 'string')
            // eslint-disable-next-line no-console
            return console.warn(msg);
         setOfferList(msg);
      };
      return messageListener(listener);
   }, []);

   useEffect(() => {
      const listener = (message: Message<OfferList>, remover: () => void) => {
         if (message.type !== MESSAGE_TYPE.OFFER_LIST_GET_RESPONSE) return;
         setOfferList(message.message);
         remover();
      };
      const remover = messageListener(listener);
      messageSender(
         MESSAGE_TYPE.OFFER_LIST_GET,
         sender,
         void 0,
         { toRuntime: true },
      );
      return remover;
   }, []);

   return [offerList, sender, setOfferList];
};
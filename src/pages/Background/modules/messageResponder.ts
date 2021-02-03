import { Offer, OfferList } from '../../../types/job';
import { Message, OriginType, PartialMessage } from '../../../types/message';
import { messageResponder } from '../../../utils/messages/messageSender';
import { UUID } from '../UUID';
import { setOfferList } from './storageWorker';

const { runtime, tabs } = chrome;

const sender = { uuid: UUID, originType: OriginType.Background };

export const bgMessageResponder = (response: Message<OfferList | string>) => {
   // const response: Message<OfferList | string> = {
   //    ...message,
   //    sender: {
   //       isResponse: true,
   //       originalSender: message.sender.sender,
   //       sender: { uuid: UUID, originType: OriginType.Background },
   //    },
   // };
   const { type, message, sender: origin } = response;
   messageResponder(
      type,
      sender,
      origin.sender,
      message,
      {
         toRuntime: true,
         toActiveTab: true,
      },
   );
   // runtime.sendMessage(response);
   // sendMessageToTab(response);
   typeof message === 'object'
      && setOfferList(message);
};

export const bgMessageRespondWithOffer = (response: Message<Offer>) => {
   // console.log('message', message);
   // const response: Message<Offer> = {
   //    ...message,
   //    sender: {
   //       isResponse: true,
   //       originalSender: message.sender.sender,
   //       sender: { uuid: UUID, originType: OriginType.Background },
   //    },
   // };
   // runtime.sendMessage(response);
   // sendMessageToTab(response);
   const { message, sender: origin, type } = response;
   messageResponder(
      type,
      sender,
      origin.sender,
      message,
      {
         toRuntime: true,
         toActiveTab: true,
      },
   );
};
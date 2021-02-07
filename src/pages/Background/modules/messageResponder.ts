import { Offer, OfferList } from '../../../types/job';
import { Message, OriginType, PartialMessage } from '../../../types/message';
import { SettingsType } from '../../../types/settings';
import { messageResponder, messageSender } from '../../../utils/messages/messageSender';
import { UUID } from '../UUID';
import { setOfferList, setSettings } from './storageWorker';


const sender = { uuid: UUID, originType: OriginType.Background };

export const offerListMessageResponder = (response: Message<OfferList | string>) => {
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
   typeof message === 'object'
      && setOfferList(message);
};

export const offerMessageRespond = (response: Message<Offer>) => {
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

export const settingsGetMessageResponder = (response: Message<SettingsType>) => {
   const { message, sender: origin, type } = response;
   messageResponder(
      type,
      sender,
      origin.sender,
      message,
      {
         toRuntime: true,
         toAllTabs: true,
      },
   );
};

export const settingsMessageResponder = (response: Message<SettingsType>) => {
   const { message, sender: origin, type } = response;
   messageResponder(
      type,
      sender,
      origin.sender,
      message,
      {
         toRuntime: true,
         toAllTabs: true,
      },
   );
   typeof message === 'object'
      && setSettings(message);
};
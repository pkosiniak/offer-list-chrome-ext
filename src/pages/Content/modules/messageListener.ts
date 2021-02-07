import { Offer } from '../../../types/job';
import { Message, MESSAGE_TYPE, OriginType } from '../../../types/message';
import { getJustJoinOffer } from './justJoinQueries';
import { contentSendMessage } from './contentMessageSender';
import { getNoFluffOffer } from './noFluffQueries';
import { showOfferRow } from './React/showInfoRow';
import { isJustJoin, isNoFluff, isSupportedOffer } from './helpers/helpers';
import { messageListener } from '../../../utils/messages/messageListener';
import { getSettingsListener } from '../../../settings/settingsListener';
import { SettingsType } from '../../../types/settings';
import { UUID } from '../UUID';

const getInfo = (): Offer => (
   isNoFluff(getNoFluffOffer)
   || isJustJoin(getJustJoinOffer)
) as false | Offer || {};

const autoShowOfferRow =  (
   uuid: string,
) =>(
   settings: SettingsType,
) => {
   isSupportedOffer(() => showOfferRow(uuid, !!settings.autoToggle, settings));
};

export const contentMessageListener = (
   uuid: string,
   settings: SettingsType,
   setSettings: (settings: SettingsType) => void,
) => messageListener(
   ({ type, message }: Message<any>) => {
      switch (type) {
         // case MESSAGE_TYPE.GET_OFFER_INFO:
         // return contentSendMessage(MESSAGE_TYPE.OFFER_LIST_APPEND, getInfo());
         case MESSAGE_TYPE.TOGGLE_OFFER_INFO_ROW:
            return showOfferRow(uuid, message, settings);
         case MESSAGE_TYPE.SETTINGS_DID_UPDATE:
            setSettings(message);
            autoShowOfferRow(uuid)(message);
            return;
      }
   },
);

export const settingsWorker = (
   setSettings: (settings: SettingsType) => void,
   uuid: string,
) => getSettingsListener(
   setSettings,
   {
      originType: OriginType.Tab,
      uuid,
   },
   autoShowOfferRow(uuid),
);

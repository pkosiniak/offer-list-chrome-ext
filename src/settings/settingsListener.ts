import { MESSAGE_TYPE, SenderType } from '../types/message';
import { SettingsType } from '../types/settings';
import { messageListener } from '../utils/messages/messageListener';
import { messageSender } from '../utils/messages/messageSender';
import { SendToOption } from '../utils/messages/types';

export const sendSettingsGetRequest = (
   origin: SenderType,
) => messageSender(
   MESSAGE_TYPE.SETTINGS_GET,
   origin,
   void 0,
   SendToOption.Runtime,
);


export const getSettingsListener = (
   setSettings: (settings: SettingsType) => void,
   origin: SenderType,
   callback?: (settings: SettingsType) => void,
) => {
   const remover = messageListener<SettingsType>(
      ({ message, sender, type }, remover) => {
         if (type !== MESSAGE_TYPE.SETTINGS_GET_RESPONSE)
            return;
         setSettings(message);
         callback && callback(message);
         remover();
      },
   );
   sendSettingsGetRequest(origin);
   return remover;
};
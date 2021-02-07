import { MESSAGE_TYPE } from '../../../../types/message';
import { MessageListenerCallback } from './types';
import * as C from '../settingsMessageCallbacks';
import { Settings } from '../../../../types/settings';

export const settingsMessageListener: MessageListenerCallback<Settings | boolean> = (
   { getState, dispatch },
   { type, sender, message },
) => {
   switch (type) {
      case MESSAGE_TYPE.SETTINGS_GET:
         return C.onSettingsGet(
            getState(),
            sender,
         );
      case MESSAGE_TYPE.SETTINGS_AUTO_TOGGLE:
         return C.onAutoToggle(
            dispatch,
            getState,
            message as boolean,
            sender,
         );
      default:
         break;
   }
};
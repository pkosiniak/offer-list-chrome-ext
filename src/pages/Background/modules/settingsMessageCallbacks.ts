import { Dispatch } from 'redux';
import { MESSAGE_TYPE, Sender } from '../../../types/message';
import { SettingsType } from '../../../types/settings';
import { StoreType } from '../store/rootReducer';
import { SettingsStoreAction } from '../store/settings/types';
import { GetState } from './messageListener/types';
import { settingsGetMessageResponder, settingsMessageResponder } from './messageResponder';
import * as A from '../store/settings/actions';

export const onSettingsGet = (
   store: StoreType,
   sender: Sender,
) => settingsGetMessageResponder({
   type: MESSAGE_TYPE.SETTINGS_GET_RESPONSE,
   message: store.settings,
   sender,
});

// export const onSettingsSet = (
//    dispatch: Dispatch<SettingsStoreAction>,
//    settings: SettingsType,
//    sender: Sender,
// ) => {
//    dispatch(A.setSettingsAction(settings));
//    settingsMessageResponder({
//       type: MESSAGE_TYPE.OFFER_LIST_DID_UPDATE,
//       message: settings,
//       sender,
//    });
// };

export const onAutoToggle = (
   dispatch: Dispatch<SettingsStoreAction>,
   getState: () => GetState,
   autoToggle: boolean,
   sender: Sender,
) => {
   console.log('AUTOTOGGLE', autoToggle);
   dispatch(A.setAutoToggleAction(autoToggle));
   settingsMessageResponder({
      type: MESSAGE_TYPE.SETTINGS_DID_UPDATE,
      message: getState().settings,
      sender,
   });
};

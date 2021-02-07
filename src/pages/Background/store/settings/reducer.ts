import * as T from './types';

export const settingsInitialState: T.SettingsStoreState = { autoToggle: false };

export const settingsStoreReducer = (
   state: T.SettingsStoreState = settingsInitialState,
   action: T.SettingsStoreAction,
): T.SettingsStoreState => {
   const { type, ...rest } = action;
   const { autoToggle } = rest;
   switch (type) {
      case T.SETTINGS_STORE.SET:
         return {
            ...rest,
         };
      case T.SETTINGS_STORE.AUTO_TOGGLE:
         return {
            ...state,
            autoToggle,
         };

      default:
         return state;
   }
};
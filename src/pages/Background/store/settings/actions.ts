import { SettingsType } from '../../../../types/settings';
import * as T from './types';

export const setSettingsAction = (
   settings: SettingsType,
): T.SettingsStoreAction => ({
   type: T.SETTINGS_STORE.SET,
   ...settings,
});

export const setAutoToggleAction = (
   autoToggle: boolean,
): T.SettingsStoreAction => ({
   type: T.SETTINGS_STORE.AUTO_TOGGLE,
   autoToggle,
});
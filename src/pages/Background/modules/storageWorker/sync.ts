import { STORAGE } from '../../../../types/storage';
import { Dispatch } from 'redux';
import { SettingsType } from '../../../../types/settings';
import { setSettingsAction } from '../../store/settings/actions';
import { SettingsStoreAction } from '../../store/settings/types';
import { settingsInitialState } from '../../store/settings/reducer';
import { storageLogger } from './logger';

const { storage } = chrome;

const settingsLogger = (
   method: 'set' | 'get', settings: SettingsType,
) => storageLogger('sync', method, 'settings', settings);

export const getSettings = (dispatch: Dispatch<SettingsStoreAction>) => {
   storage.sync.get(STORAGE.SETTINGS, ({ settings }) => {
      settingsLogger('get', settings)();
      const isNotEmpty = !!Object.values(settings).length;
      isNotEmpty
         ? dispatch(
            setSettingsAction(settings),
         )
         : setSettings(settingsInitialState);
   });
};

export const setSettings = (settings: SettingsType) => {
   storage.sync.set({ settings }, settingsLogger('set', settings));
};

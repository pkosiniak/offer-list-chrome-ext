import { OfferList } from '../../../types/job';
import { STORAGE } from '../../../types/storage';
import { Dispatch } from 'redux';
import { OfferListStoreAction } from '../store/offerList/types';
import { updateOfferListStoreAction } from '../store/offerList/actions';
import { SettingsType } from '../../../types/settings';
import { setSettingsAction } from '../store/settings/actions';
import { SettingsStoreAction } from '../store/settings/types';
import { settingsInitialState } from '../store/settings/reducer';

const { storage } = chrome;

const storageLogger = (
   type: 'local' | 'sync',
   method: 'get' | 'set',
   name: string,
   object: any,
// eslint-disable-next-line no-console
) => () => console.log(
   '%c' + `storage.${type}.${method}( ${name} )`.toUpperCase(),
   'color: #a7f',
   object,
);


export const getOfferList = (dispatch: Dispatch<OfferListStoreAction>) => {
   storage.local.get(STORAGE.OFFER_LIST, ({ offerList }) => {
      storageLogger('local', 'get', 'offerList', offerList)();
      dispatch(
         updateOfferListStoreAction(offerList ? Array.from(offerList) : []),
      );
   });
};

export const setOfferList = (offerList: OfferList) => {
   storage.local.set({ offerList }, storageLogger('local', 'set', 'offerList', offerList));
};

export const getSettings = (dispatch: Dispatch<SettingsStoreAction>) => {
   storage.sync.get(STORAGE.SETTINGS, ({ settings }) => {
      storageLogger('sync', 'get', 'settings', settings)();
      const isNotEmpty = !!Object.values(settings).length;
      isNotEmpty
         ? dispatch(
            setSettingsAction(settings),
         )
         : setSettings(settingsInitialState);
   });
};

export const setSettings = (settings: SettingsType) => {
   storage.sync.set({ settings }, () => storageLogger('sync', 'set', 'settings', settings));
};

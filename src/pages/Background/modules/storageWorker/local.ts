import { OfferList } from '../../../../types/job';
import { STORAGE } from '../../../../types/storage';
import { Dispatch } from 'redux';
import { OfferListStoreAction } from '../../store/offerList/types';
import { updateOfferListStoreAction } from '../../store/offerList/actions';
import { SettingsType } from '../../../../types/settings';
import { setSettingsAction } from '../../store/settings/actions';
import { SettingsStoreAction } from '../../store/settings/types';
import { settingsInitialState } from '../../store/settings/reducer';
import { storageLogger } from './logger';
const { storage } = chrome;

const logger = (
   method: 'set' | 'get', offerList: OfferList,
) => storageLogger('local', method, 'offerList', offerList);

export const getOfferList = (dispatch: Dispatch<OfferListStoreAction>) => {
   storage.local.get(STORAGE.OFFER_LIST, ({ offerList }) => {
      logger('get', offerList)();
      dispatch(
         updateOfferListStoreAction(offerList ? Array.from(offerList) : []),
      );
   });
};

export const setOfferList = (offerList: OfferList) => {
   storage.local.set({ offerList }, logger('set', offerList));
};

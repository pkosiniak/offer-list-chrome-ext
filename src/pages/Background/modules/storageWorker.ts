import { OfferList } from '../../../types/job';
import { STORAGE } from '../../../types/storage';
import { Dispatch } from 'redux';
import { OfferListStoreAction } from '../store/offerList/types';
import { updateOfferListStoreAction } from '../store/offerList/actions';

const { storage } = chrome;

export const getOfferList = (dispatch: Dispatch<OfferListStoreAction>) => {
   storage.local.get(STORAGE.OFFER_LIST, ({ offerList }) => {
      dispatch(
         updateOfferListStoreAction(offerList ? Array.from(offerList) : []),
      );
   });
};

export const setOfferList = (offerList: OfferList) => {
   storage.local.set({ offerList });
};
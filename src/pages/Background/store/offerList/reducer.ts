import * as T from './types';

const initialState: T.OfferListStoreState = { offerList: [] };

export const offerListStoreReducer = (
   state: T.OfferListStoreState = initialState,
   action: T.OfferListStoreAction,
): T.OfferListStoreState => {
   const { type, offerList } = action;
   switch (type) {
      case T.OFFER_LIST_STORE.UPDATE:
         return {
            ...state,
            offerList,
         };
      default:
         return state;
   }
};
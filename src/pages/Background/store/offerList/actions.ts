import * as T from './types';
import { OfferList } from '../../../../types/job';

export const updateOfferListStoreAction = (
   offerList: OfferList,
): T.OfferListStoreAction => ({
   type: T.OFFER_LIST_STORE.UPDATE,
   offerList,
});
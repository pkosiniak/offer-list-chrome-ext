import { Action } from 'redux';
import { OfferList } from '../../../../types/job';

export enum OFFER_LIST_STORE {
   GET = 'OFFER_LIST_STORE_GET',
   UPDATE = 'OFFER_LIST_STORE_UPDATE',
}

export interface OfferListStoreState {
   offerList: OfferList
 }

export type OfferListStoreAction = OfferListStoreState & Action<OFFER_LIST_STORE>;
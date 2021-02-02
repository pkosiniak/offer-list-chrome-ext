import { combineReducers } from 'redux';
import { offerListStoreReducer } from './offerList/reducer';

export const rootReducer = combineReducers({
   offerList: offerListStoreReducer,
});
export type StoreType = ReturnType<typeof rootReducer>;
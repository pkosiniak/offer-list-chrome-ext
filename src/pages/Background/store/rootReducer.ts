import { combineReducers } from 'redux';
import { offerListStoreReducer } from './offerList/reducer';
import { settingsStoreReducer } from './settings/reducer';

export const rootReducer = combineReducers({
   offerList: offerListStoreReducer,
   settings: settingsStoreReducer,
});
export type StoreType = ReturnType<typeof rootReducer>;
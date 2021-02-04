import { Job } from '../../../types/job';
import { Message, MESSAGE_TYPE } from '../../../types/message';
import { STORAGE } from '../../../types/storage';
import { Store, CombinedState, AnyAction } from 'redux';
import { StoreType } from '../store/rootReducer';
import * as LC from './offerListMessageCallbacks';
import { OfferListStoreAction } from '../store/offerList/types';
import { messageListener } from '../../../utils/messages/messageListener';
import backup from '../store/backup.json';

export const backgroundMessageListener = (
   { getState, dispatch }: Store<CombinedState<StoreType>, OfferListStoreAction>,
) => messageListener(
   (message: Message<any>) => {
      switch (message.type) {
         case MESSAGE_TYPE.OFFER_LIST_GET:
            LC.onOfferListGet(
               getState(),
               message.sender,
            );
            break;
         case MESSAGE_TYPE.OFFER_LIST_SET:
            LC.onOfferListSet(
               dispatch,
               message.message,
               message.sender,
            );
            break;
         case MESSAGE_TYPE.OFFER_LIST_APPEND:
            LC.onOfferListAppend(
               dispatch,
               getState,
               message.message,
               message.sender,
            );
            break;
         case MESSAGE_TYPE.OFFER_LIST_UPDATE_AT:
            LC.onOfferListUpdateAt(
               dispatch,
               getState,
               message.message,
               message.sender,
            );
            break;
         case MESSAGE_TYPE.OFFER_LIST_REMOVE_AT:
            LC.onOfferListRemoveAt(
               dispatch,
               getState,
               message.message,
               message.sender,
            );
            break;
         case MESSAGE_TYPE.GET_OFFER_BY_URL:
            LC.onGetOfferByURL(
               getState,
               message.message,
               message.sender,
            );
            break;
         case MESSAGE_TYPE.RESTORE_BACKUP:
            LC.onOfferListSet(
               dispatch,
               backup.backup,
               message.sender,
            );
            break;
         default:
            break;
      }
   },
);
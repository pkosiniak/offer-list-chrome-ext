import { Job } from '../../../types/job';
import { Message, MESSAGE_TYPE } from '../../../types/message';
import { STORAGE } from '../../../types/storage';
import { Store, CombinedState, AnyAction } from 'redux';
import { StoreType } from '../store/rootReducer';
import * as LC from './offerListMessageCallbacks';
import { OfferListStoreAction } from '../store/offerList/types';
import { messageListener } from '../../../utils/messages/messageListener';
import backup from '../store/backup.json';

const { runtime, storage } = chrome;

// const updateOfferList = (offer: Partial<Job>) => {
//    storage.sync.get(STORAGE.OFFER_LIST, ({ offerList }) => {
//       const updated = (offerList ? Array.from(offerList) : []) as Partial<Job>[];
//       const toUpdate = updated.findIndex(job => job.company?.name === offer.company?.name && job.position?.name === offer.position?.name);
//       toUpdate > 0 ? updated[toUpdate] = offer : updated.push({ ...offer, id: updated.length + 1 + '' });
//       storage.sync.set({ offerList: updated }, () => {
//          runtime.sendMessage({ type: MESSAGE_TYPE.OFFER_LIST_DID_UPDATE, message: updated });
//       });
//    });
// };


export const backgroundMessageListener = (
   { getState, dispatch }: Store<CombinedState<StoreType>, OfferListStoreAction>,
   uuid: string,
) => messageListener(
   (message: Message<any>) => {
      // eslint-disable-next-line no-console
      // console.log(message);
      switch (message.type) {
         // case MESSAGE_TYPE.APPEND_JOB_DETAILS:
         //    updateOfferList(message.message);
         //    break;
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
import { MESSAGE_TYPE } from '../../../../types/message';
import { MessageListenerCallback } from './types';
import * as C from '../offerListMessageCallbacks';

export const offerListMessageListener: MessageListenerCallback = (
   { getState, dispatch },
   { type, sender, message },
   next,
) => {
   switch (type) {
      case MESSAGE_TYPE.OFFER_LIST_GET:
         return C.onOfferListGet(
            getState(),
            sender,
         );
      case MESSAGE_TYPE.OFFER_LIST_SET:
         return C.onOfferListSet(
            dispatch,
            message,
            sender,
         );
      case MESSAGE_TYPE.OFFER_LIST_APPEND:
         return C.onOfferListAppend(
            dispatch,
            getState,
            message,
            sender,
         );
      case MESSAGE_TYPE.OFFER_LIST_UPDATE_AT:
         return C.onOfferListUpdateAt(
            dispatch,
            getState,
            message,
            sender,
         );
      case MESSAGE_TYPE.OFFER_LIST_REMOVE_AT:
         return C.onOfferListRemoveAt(
            dispatch,
            getState,
            message,
            sender,
         );
      case MESSAGE_TYPE.OFFER_LIST_GET_BY_URL:
         return C.onGetOfferByURL(
            getState,
            message,
            sender,
         );
         // case MESSAGE_TYPE.RESTORE_BACKUP:
         //    LC.onOfferListSet(
         //       dispatch,
         //       backup.backup,
         //       message.sender,
         //    );

      default:
         return next && next();
   }
};
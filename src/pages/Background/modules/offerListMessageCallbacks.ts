import { Dispatch, CombinedState } from 'redux';
import { Job, Offer, OfferList } from '../../../types/job';
import { Message, MESSAGE_TYPE, Sender } from '../../../types/message';
import { indexValidator, validateIndex } from '../../../utils/validateIndex';
import { deleteItemAtIndex, replaceItemAtIndex } from '../../../utils/arrayReplaceRemove';
import { updateOfferListStoreAction } from '../store/offerList/actions';
import { OfferListStoreAction } from '../store/offerList/types';
import { StoreType } from '../store/rootReducer';
import { bgMessageResponder, bgMessageRespondWithOffer } from './messageResponder';


export const onOfferListGet = (
   store: StoreType,
   sender: Sender,
) => bgMessageResponder({
   type: MESSAGE_TYPE.OFFER_LIST_GET_RESPONSE,
   message: store.offerList.offerList,
   sender,
});

export const onOfferListSet = (
   dispatch: Dispatch<OfferListStoreAction>,
   offerList: OfferList,
   sender: Sender,
) => {
   dispatch(updateOfferListStoreAction(offerList));
   bgMessageResponder({
      type: MESSAGE_TYPE.OFFER_LIST_DID_UPDATE,
      message: offerList,
      sender,
   });
};

export const onOfferListUpdateAt = (
   dispatch: Dispatch<OfferListStoreAction>,
   getState: () => CombinedState<StoreType>,
   offer: Partial<Job>,
   sender: Sender,
) => {
   const { offerList } = getState().offerList;
   const [index, isValid] = indexValidator(offer.id && offerList.findIndex(
      stored => stored.id === offer.id,
   ));
   isValid && dispatch(
      updateOfferListStoreAction(replaceItemAtIndex(offerList, index, offer)),
   );
   bgMessageResponder({
      type: MESSAGE_TYPE.OFFER_LIST_DID_UPDATE,
      message: isValid
         ? getState().offerList.offerList
         : `offer.id = ${offer.id} is invalid`,
      sender,
   });
};

export const onOfferListRemoveAt = (
   dispatch: Dispatch<OfferListStoreAction>,
   getState: () => CombinedState<StoreType>,
   offer: Offer,
   sender: Sender,
) => {
   const { offerList } = getState().offerList;
   const asString = JSON.stringify(offer);

   const [index, isValid] = indexValidator(
      offerList.findIndex(stored => JSON.stringify(stored) === asString),
   );
   isValid && dispatch(
      updateOfferListStoreAction(deleteItemAtIndex(offerList, index)),
   );

   bgMessageResponder({
      type: MESSAGE_TYPE.OFFER_LIST_DID_UPDATE,
      message: isValid
         ? getState().offerList.offerList
         : 'Offer not found!',
      sender,
   });
};

export const onOfferListAppend = (
   dispatch: Dispatch<OfferListStoreAction>,
   getState: () => CombinedState<StoreType>,
   offer: Partial<Job>,
   sender: Sender,
) => {
   const { offerList } = getState().offerList;
   const lastId = offerList.map(offer => +(offer.id || -1)).sort((a,b) => a - b)[offerList.length - 1] || 0;
   dispatch(
      updateOfferListStoreAction(
         offerList.concat([{
            ...offer,
            id: lastId + 1 + '',
         }]),
      ),
   );
   bgMessageResponder({
      type: MESSAGE_TYPE.OFFER_LIST_DID_UPDATE,
      message: getState().offerList.offerList,
      sender,
   });
};

export const onGetOfferByURL = (
   getState: () => CombinedState<StoreType>,
   url: string,
   sender: Sender,
) => {
   const { offerList } = getState();
   const offer = offerList.offerList.find(
      offer => !!offer.links?.find(
         link => link.url === url,
      ),
   );
   // console.log(offerList.offerList);
   bgMessageRespondWithOffer({
      type: MESSAGE_TYPE.GET_OFFER_BY_URL_RESPONSE,
      message: offer || {},
      sender: sender,
   });
};
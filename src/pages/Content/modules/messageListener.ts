import { Job, Offer } from '../../../types/job';
import { Message, MESSAGE_TYPE } from '../../../types/message';
import { UUID } from '../../Background/UUID';
import { getJustJoinOffer } from './justJoinQueries';
import { contentSendMessage } from './contentMessageSender';
import { getNoFluffOffer, noFluffQueries, noFluffSelector } from './noFluffQueries';
import { showOfferRow } from './React/showInfoRow';
import { isJustJoin, isNoFluff } from './helpers/helpers';
import { messageListener } from '../../../utils/messages/messageListener';

const { runtime } = chrome;

const getInfo = (): Offer => (
   isNoFluff(getNoFluffOffer)
   || isJustJoin(getJustJoinOffer)
) as false | Offer || {};
// {
//    const name = window.location.hostname;
//    return (isNoFluff(getNoFluffOffer) || isJustJoin(getJustJoinOffer)) as false | Offer || {};
//    // (name.match(/nofluffjobs/) && getNoFluffOffer())
//    //    || (name.match(/justjoin\.it/) && getJustJoinOffer())
//    //    || {};
// };


export const contentMessageListener = () => messageListener(
   (message: Message<any>) => {
      console.log('message', message);
      switch (message.type) {
         case MESSAGE_TYPE.GET_OFFER_INFO:
            return contentSendMessage(MESSAGE_TYPE.OFFER_LIST_APPEND, getInfo());
         case MESSAGE_TYPE.SHOW_OFFER_INFO_ROW:
            return showOfferRow();
      }
   },
);

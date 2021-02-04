import { Offer } from '../../../types/job';
import { Message, MESSAGE_TYPE } from '../../../types/message';
import { getJustJoinOffer } from './justJoinQueries';
import { contentSendMessage } from './contentMessageSender';
import { getNoFluffOffer } from './noFluffQueries';
import { showOfferRow } from './React/showInfoRow';
import { isJustJoin, isNoFluff } from './helpers/helpers';
import { messageListener } from '../../../utils/messages/messageListener';

const getInfo = (): Offer => (
   isNoFluff(getNoFluffOffer)
   || isJustJoin(getJustJoinOffer)
) as false | Offer || {};

export const contentMessageListener = () => messageListener(
   (message: Message<any>) => {
      switch (message.type) {
         case MESSAGE_TYPE.GET_OFFER_INFO:
            return contentSendMessage(MESSAGE_TYPE.OFFER_LIST_APPEND, getInfo());
         case MESSAGE_TYPE.SHOW_OFFER_INFO_ROW:
            return showOfferRow();
      }
   },
);

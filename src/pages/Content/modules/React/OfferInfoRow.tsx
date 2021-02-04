import React, { useEffect, useState } from 'react';
import Table from '../../../../Components/Table/Table';
import HeadingRow from '../../../../Modules/JobTable/Rows/HeadingRow';
import OfferRow from '../../../../Modules/JobTable/Rows/OfferRow';
import { Offer, OfferList } from '../../../../types/job';
import { Message, MESSAGE_TYPE, OriginType } from '../../../../types/message';
import { UUID } from '../../UUID';
import { isJustJoin, isNoFluff } from '../helpers/helpers';
import { getJustJoinOffer } from '../justJoinQueries';
import { contentSendMessage } from '../contentMessageSender';
import { getNoFluffOffer } from '../noFluffQueries';
import * as P from './parts';
import { messageListener } from '../../../../utils/messages/messageListener';
import Button from '../../../../Components/Button/Button';

const { runtime } = chrome;

interface OfferInfoRowProps {
   url: string
}


const OfferInfoRow: React.FC<OfferInfoRowProps> = ({
   url,
}) => {
   const [offerList, setOfferList] = useState<OfferList>([]);
   const [newOffer, setNewOffer] = useState<Offer | undefined>({});
   useEffect(() => {
      const listener = (message: Message<OfferList>) => {
         if (message.type !== MESSAGE_TYPE.GET_OFFER_BY_URL_RESPONSE)
            return;
         setOfferList(message.message);
      };
      runtime.onMessage.addListener(listener);
      contentSendMessage(MESSAGE_TYPE.GET_OFFER_BY_URL, url);
      return () => {
         runtime.onMessage.removeListener(listener);
      };
   }, []);

   const isOfferValid = (offer?: Offer) => offer && !!offer.links?.[0].url && !!offer.company?.name;

   const onGet = () => {
      const newOffer = (
         isJustJoin(getJustJoinOffer) ||
         isNoFluff(getNoFluffOffer)
      ) as Offer | false;
      newOffer && setNewOffer(newOffer);
   };

   const onAppend = () => {
      messageListener((message: Message<OfferList>) => {
         const { type, sender, message: msg } = message;
         if (type !== MESSAGE_TYPE.OFFER_LIST_DID_UPDATE) return;
         if (sender.originalSender?.uuid !== UUID) return;
         const offersMatchUrl = msg.filter(offer => !!offer.links?.find(link => link.url === url));
         if (!offersMatchUrl.length) return;
         setOfferList(offersMatchUrl);
         setNewOffer(void 0);
      });
      contentSendMessage(MESSAGE_TYPE.OFFER_LIST_APPEND, newOffer);
   };
   const onGetOffer = () => (
      isOfferValid(newOffer) ? onAppend : onGet
   )();

   const onRefresh = () => contentSendMessage(
      MESSAGE_TYPE.GET_OFFER_BY_URL, url, true,
   );

   return (
      <P.Wrapper>
         <P.InnerWrapper>
            {(isNoFluff() || isJustJoin()) && newOffer && !newOffer.id && (
               <P.GetInfo
                  text={isOfferValid(newOffer) ? 'ADD' : 'GET INFO'}
                  onClick={onGetOffer}
               />
            )}
            {offerList.length >= 0 && (
               <P.Refresh text={'↻'} onClick={onRefresh} />
            )}
            <Table>
               <HeadingRow />
               {(offerList.length ? offerList : [newOffer || {}]).map(
                  (offer, index, list) => (
                     <OfferRow
                        key={index}
                        offer={offer}
                        sender={{ originType: OriginType.Tab, uuid: UUID }}
                        zIndex={list.length - index}
                     />
                  ),
               )}
            </Table>
         </P.InnerWrapper>
      </P.Wrapper>
   );
};

export default OfferInfoRow;

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
   const [offer, setOffer] = useState<Offer>({});
   useEffect(() => {
      const listener = (message: Message<Offer>) => {
         if (message.type !== MESSAGE_TYPE.GET_OFFER_BY_URL_RESPONSE)
            return;
         setOffer(message.message);
      };
      runtime.onMessage.addListener(listener);
      contentSendMessage(MESSAGE_TYPE.GET_OFFER_BY_URL, url);
      return () => {
         runtime.onMessage.removeListener(listener);
      };
   }, []);

   const isOfferValid = (offer: Offer) => !!offer.links?.[0].url && !!offer.company?.name;

   const onGet = () => {
      const newOffer = (
         isJustJoin(getJustJoinOffer) ||
         isNoFluff(getNoFluffOffer)
      ) as Offer | false;
      newOffer && setOffer(newOffer);
   };

   const onAppend = () => {
      messageListener((message: Message<OfferList>) => {
         const { type, sender, message: msg } = message;
         if (type !== MESSAGE_TYPE.OFFER_LIST_DID_UPDATE) return;
         const id = msg.map(offer => +(offer.id || -1)).sort((a, b) => a - b)[msg.length - 1];
         const updateOffer = msg.find(offer => offer.id === '' + id);
         sender.originalSender?.uuid === UUID && id && setOffer(updateOffer || {});
         // updateOffer && remover();
      });
      contentSendMessage(MESSAGE_TYPE.OFFER_LIST_APPEND, offer);
   };
   const onGetOffer = () => (
      isOfferValid(offer) ? onAppend : onGet
   )();

   const onRefresh = () => contentSendMessage(
      MESSAGE_TYPE.GET_OFFER_BY_URL, url, true,
   );

   return (
      <P.Wrapper>
         <P.InnerWrapper>
            {(isNoFluff() || isJustJoin()) && !offer.id && (
               <P.GetInfo
                  text={isOfferValid(offer) ? 'ADD' : 'GET INFO'}
                  onClick={onGetOffer}
               />
            )}
            {offer.id && (
               <P.Refresh text={'↻'} onClick={onRefresh} />
            )}
            <Table>
               <HeadingRow />
               <OfferRow offer={offer} sender={{ originType: OriginType.Tab, uuid: UUID }} zIndex={1} />
            </Table>
         </P.InnerWrapper>
      </P.Wrapper>
   );
};

export default OfferInfoRow;

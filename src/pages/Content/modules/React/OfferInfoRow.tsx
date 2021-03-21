import React, { useEffect, useState } from 'react';
import Table from '../../../../Components/Table/Table';
import HeadingRow from '../../../../Modules/Rows/HeadingRow';
import OfferRow from '../../../../Modules/Rows/OfferRow';
import { Offer, OfferList } from '../../../../types/job';
import { Message, MESSAGE_TYPE, OfferByURL, OriginType } from '../../../../types/message';
import { isJustJoin, isNoFluff } from '../helpers/helpers';
import { getJustJoinOffer } from '../justJoinQueries';
import { contentSendMessage } from '../contentMessageSender';
import { getNoFluffOffer } from '../noFluffQueries';
import * as P from './parts';
import { messageListener } from '../../../../utils/messages/messageListener';
import { getOfferByUrl } from '../../../../utils/getOfferByUrl';
import { getHostnameFromUrl } from '../../../../utils/getHostnameFromUrl';
import { SettingsType } from '../../../../types/settings';

const { runtime } = chrome;

interface OfferInfoRowProps {
   url: string,
   uuid: string,
   settings: SettingsType,
   showInfoRow: boolean,
}

const preFillNewOffer = (newOffer: Offer, url: string): Offer => {
   const links = newOffer.links ?? [{ url, name: getHostnameFromUrl(url, 'link'), isAvailable: true }];
   return {
      ...newOffer,
      links,
   };
};

const OfferInfoRow: React.FC<OfferInfoRowProps> = ({
   url,
   uuid,
   settings,
   showInfoRow,
}) => {
   const getOfferInfo = () => (
      isJustJoin(getJustJoinOffer) ||
      isNoFluff(getNoFluffOffer)
   ) as Offer | false;

   const [offerList, setOfferList] = useState<OfferList>([]);
   const [newOffer, setNewOffer] = useState<Offer | undefined>(preFillNewOffer({}, url));
   const [offerInfo, setOfferInfo] = useState<Offer | undefined>();

   useEffect(() => {
      setOfferInfo(getOfferInfo() || void 0);
   }, []);

   useEffect(() => {
      const listener = (message: Message<OfferList>) => {
         if (message.type !== MESSAGE_TYPE.OFFER_LIST_GET_BY_URL_RESPONSE)
            return;
         setOfferList(message.message);
      };
      runtime.onMessage.addListener(listener);
      const byName = offerInfo && offerInfo.company?.name;
      contentSendMessage(
         MESSAGE_TYPE.OFFER_LIST_GET_BY_URL,
         byName ? { url, byName } : url,
      );
      return () => {
         runtime.onMessage.removeListener(listener);
      };
   }, []);

   const isOfferValid = (offer?: Offer) => offer && !!offer.links?.[0].url && !!offer.company?.name;

   const appendOffer = (offerInfo: Offer) => {
      messageListener((message: Message<OfferList>) => {
         const { type, sender, message: msg } = message;
         if (type !== MESSAGE_TYPE.OFFER_LIST_DID_UPDATE) return;
         if (sender.originalSender?.uuid !== uuid) return;
         const offersMatchUrl = getOfferByUrl(msg, url);
         if (!offersMatchUrl.length) return;
         setOfferList(offersMatchUrl);
         setNewOffer(offersMatchUrl.length ? void 0 : preFillNewOffer({}, url));
      });
      contentSendMessage(MESSAGE_TYPE.OFFER_LIST_APPEND, offerInfo);
   };

   const onGetOffer = () => {
      const info = offerInfo || getOfferInfo() || {};
      setNewOffer(info);
      isOfferValid(info) && appendOffer(info);
   };

   const onRefresh = () => {
      const byName = offerInfo && offerInfo.company?.name;
      contentSendMessage<OfferByURL>(
         MESSAGE_TYPE.OFFER_LIST_GET_BY_URL, byName ? { url, byName } : url, true,
      );
   };
   return (
      <P.Wrapper
      // style={{display: show ? 'flex' : 'none'}}
      >
         <P.InnerWrapper>
            {(isNoFluff() || isJustJoin()) ? (
               <P.GetInfo
                  text={newOffer ? '🔍 GET OFFER INFO' : '➕'}
                  onClick={onGetOffer}
               />
            ) : (
               <P.GetInfo
                  text={'➕ ADD OFFER INFO'}
                  onClick={() => appendOffer(preFillNewOffer(newOffer || {}, url))}
               />
            )}
            {offerList.length >= 0 && (
               <P.Refresh text={'↻'} onClick={onRefresh} />
            )}
            <Table>
               <HeadingRow setSort={() => {}} setFilter={() => void 0}/>
               {(newOffer ? offerList.concat(newOffer) : offerList).map(
                  (offer, index, list) => (
                     <OfferRow
                        key={index}
                        offer={offer}
                        sender={{ originType: OriginType.Tab, uuid }}
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

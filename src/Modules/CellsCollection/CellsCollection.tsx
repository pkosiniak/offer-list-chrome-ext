import { useEffect, useReducer } from 'react';
import { ApplicationStatus, Job, Offer } from '../../types/job';
import { offerReducer } from './LocalStore/reducer';
import { Dates } from './modules/Dates';
import Position from './modules/Position';
import Company from './modules/Company';
import Id from './modules/Id';
import Links from './modules/Links';
import Requirements from './modules/Requirements';
import Salary from './modules/Salary';
import Notes from './modules/Notes';
import { Message, MESSAGE_TYPE, Sender, SenderType, UUIDType } from '../../types/message';
import { OFFER, OfferAction } from './LocalStore/types';
import { useReducerEffect } from '../../hooks/useReducerEffect';
import Remove from './modules/Remove';
import { messageSender } from '../../utils/messages/messageSender';
import { messageListener } from '../../utils/messages/messageListener';
import { SendToOption } from '../../utils/messages/types';
import { usePrevProps } from '../../hooks/usePrevProps';
import Status from './modules/Status';

interface CellsCollectionProps extends Partial<Job> {

}


const CellsCollection = (offer: CellsCollectionProps, sender: SenderType, zIndex: number) => {
   const [state, dispatch] = useReducerEffect(
      offerReducer,
      offer,
      {
         type: OFFER.ALL,
         ...offer,
      });
   const prevState = usePrevProps(state);
   useEffect(() => {
      prevState
         && JSON.stringify(prevState) !== JSON.stringify(state)
         && state.id !== undefined
         && messageSender(
            MESSAGE_TYPE.OFFER_LIST_UPDATE_AT,
            sender,
            state,
            SendToOption.Runtime,
         );
   }, [state]);

   const sendRemoveRow = () => {
      const listener = (
         message: Message<{} | string>,
         remover: () => void,
      ) => {
         if (message.sender.originalSender?.uuid !== sender.uuid) return;
         // eslint-disable-next-line no-console
         if (typeof message === 'string') return console.error(message);
         dispatch({
            type: OFFER.ALL,
            ...{},
         });
         remover();
      };
      messageListener(listener);
      messageSender(
         MESSAGE_TYPE.OFFER_LIST_REMOVE_AT,
         { ...sender, requireException: true },
         state,
         { toRuntime: true },
      );
   };

   const {
      id,
      links,
      company,
      position,
      requirements,
      salary,
      notes,
      exposeDate,
      applicationDate,
      status,
   } = state;
   return [
      Id({ dispatch, id, zIndex }),
      Links({ dispatch, links, zIndex }),
      ...Company({ dispatch, company, zIndex }),
      ...Position({ dispatch, position, zIndex }),
      Requirements({ dispatch, requirements, zIndex }),
      Salary({ dispatch, salary, zIndex }),
      Notes({ dispatch, notes, zIndex }),
      ...Dates({ dispatch, applicationDate, exposeDate, zIndex }),
      Status({ dispatch, status: status || (applicationDate && ApplicationStatus.Sent) }),
      Remove({ removeAction: sendRemoveRow }),
   ];
};

export default CellsCollection;

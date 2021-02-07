import { Store, CombinedState } from 'redux';
import { Message } from '../../../../types/message';
import { messageListener } from '../../../../utils/messages/messageListener';
import { StoreType } from '../../store/rootReducer';
import { StoreActions } from '../../store/types';
import { offerListMessageListener } from './offerListMessageListener';
import { settingsMessageListener } from './settingsMessageListener';


export const backgroundMessageListener = (
   store: Store<CombinedState<StoreType>, StoreActions>,
) => messageListener(
   (message: Message<any>) => offerListMessageListener(
      store,
      message,
      () => settingsMessageListener(
         store,
         message,
      ),
   ),
);
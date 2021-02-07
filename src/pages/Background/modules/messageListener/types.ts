import { CombinedState, Store } from 'redux';
import { Message } from '../../../../types/message';
import { StoreType } from '../../store/rootReducer';
import { StoreActions } from '../../store/types';

export type GetState = CombinedState<StoreType> 

export type MessageListenerCallback<T = any> = (
   store: Store<GetState, StoreActions>,
   message: Message<T>,
   next?: () => void
) => void


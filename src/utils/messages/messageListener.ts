import { Message } from '../../types/message';
import { listenerLogger } from './messageLogger';

const { runtime } = chrome;


export const messageListener = <T>(
   listener: (message: Message<T>, remover: () => void) => void,
) => {
   const remover = () => runtime.onMessage.removeListener(withoutRemover);
   const withoutRemover = (message: Message<T>) =>  listenerLogger(listener)(message, remover);
   runtime.onMessage.addListener(withoutRemover);
   return remover;
};
/* eslint-disable no-console */
import { Message } from '../../types/message';
import * as TP from './types';

const messageLogger = <T>(
   sourceType: 'LISTENER' | 'SENDER',
   message: Message<T>,
   toOptions?: TP.MessageSenderOptions | TP.SendToOption,
) => {
   const { type, message: msg, sender } = message;
   const date = new Date(Date.now());
   console.log(
      `%cMESSAGE ${sourceType} LOGGER `
      + '%cfrom: '
      + '%c' + sender.sender.originType
      + ' \t%c' + date.toLocaleTimeString()
      + '%c:' + date.getMilliseconds(),
      `color: ${sourceType === 'LISTENER' ? '#eeb' : '#beb'}; font-weight: bold;`,
      'color: #ccc;; font-style; italic',
      'color: #f00; font-weight: bold;',
      'color: #ccc; font-size: 11px;',
      'color: #ccc; font-size: 10px;',
   );
   console.log(
      '\t%cTYPE: ' + '%c' + type,
      'color: #0f0; font-weight: bold;',
      'color: #6d6; font-weight: normal;',
   ),
   console.log(
      '\t%cSENDER: ',
      'color: #ff0; font-weight: bold;',
      '\n\tFrom:',
      sender.sender,
      ',\n\t is response:',
      sender.isResponse,
      ',\n\t to:',
      sender.originalSender,
   );
   console.log(
      '\t%cMESSAGE: ',
      'color: #c80; font-weight: bold;',
      msg,
   );
   toOptions && console.log(
      '\t%cTO: ',
      'color: #f44; font-weight: bold;',
      toOptions,
   );
};

export const listenerLogger = <T>(
   listener: (message: Message<T>, remover: () => void) => void,
) => (
      message: Message<T>, remover: () => void,
   ) => {
      messageLogger('LISTENER', message);
      return listener(message, remover);
   };

export const senderLogger = <T>(
   sender: (
      message: Message<T>,
      toOptions?: TP.MessageSenderOptions | TP.SendToOption
   ) => void,
) => (
      message: Message<T>,
      toOptions?: TP.MessageSenderOptions | TP.SendToOption,
   ) => {
      messageLogger('SENDER', message, toOptions);
      return sender(message, toOptions);
   };

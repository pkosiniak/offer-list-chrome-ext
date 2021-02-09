import { Message, MESSAGE_TYPE, SenderType } from '../../types/message';
import { senderLogger } from './messageLogger';
import * as T from './types';

const { runtime, tabs } = chrome;

const queryTabs = <T>(
   queryInfo: chrome.tabs.QueryInfo,
   message: Message<T>,
) => tabs.query(queryInfo, (resultTabs) => {
      resultTabs.forEach((tab, index) => {
         console.log(tab);
         tab.id && (
            queryInfo.active
               ? index === 0 && '' + console.log('tabs.sendMessage', message) && tabs.sendMessage(tab.id, message)
               : tabs.sendMessage(tab.id, message)
         );
      });
   });

const sendToTabs = <T>(
   message: Message<T>,
   to: T.SendToOption | number,
) => typeof to === 'string'
      ? queryTabs(
         to === T.SendToOption.AllTabs
            ? {}
            : { active: true, currentWindow: true },
         message,
      ) : tabs.sendMessage(to, message);

const sendToRuntime = <T>(message: Message<T>) => runtime.sendMessage(message);


const asSendToOption = (
   options?: T.SendToOption,
) => options ?? T.SendToOption.Runtime;

const asMessageSenderOptions = (
   options?: T.MessageSenderOptions | T.SendToOption,
): T.MessageSenderOptions => options && T.isMessageSenderOptions(options)
   ? options
   : {
      toRuntime: asSendToOption(options) === T.SendToOption.Runtime,
      toActiveTab: asSendToOption(options) === T.SendToOption.ActiveTab,
      toAllTabs: asSendToOption(options) === T.SendToOption.AllTabs,
   };

const withMessage = <T>(
   message: Message<T>,
   toOptions?: T.MessageSenderOptions | T.SendToOption,
) => {
   const {
      toRuntime, toActiveTab, toAllTabs, toTabId,
   } = asMessageSenderOptions(toOptions);
   toRuntime && sendToRuntime(message);
   if (!(toActiveTab || toAllTabs || toTabId)) return;
   if (toActiveTab)
      return sendToTabs(message, T.SendToOption.ActiveTab);
   if (toAllTabs)
      return sendToTabs(message, T.SendToOption.AllTabs);
   if (toTabId !== undefined)
      return sendToTabs(message, toTabId);
};

export const messageSender = <T>(
   type: MESSAGE_TYPE,
   sender: SenderType,
   message: T,
   options?: T.MessageSenderOptions | T.SendToOption,
) => senderLogger(withMessage)({
      type,
      message,
      sender: { sender },
   }, options);

export const messageResponder = <T>(
   type: MESSAGE_TYPE,
   sender: SenderType,
   origin: SenderType,
   message: T,
   options?: T.MessageSenderOptions | T.SendToOption,
) => senderLogger(withMessage)({
      type,
      message,
      sender: { sender, originalSender: origin, isResponse: true },
   }, options);
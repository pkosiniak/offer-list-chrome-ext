import { PartialMessage } from "../../types/message";

const { tabs } = chrome;
export const sendMessageToTab = <T>(message: PartialMessage<T>) => {
   tabs.query(
      { active: true, currentWindow: true },
      (result) => {
         result[0].id && tabs.sendMessage(
            result[0].id,
            message,
         );
      });
};
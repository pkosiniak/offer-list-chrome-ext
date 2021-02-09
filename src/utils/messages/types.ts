
export enum SendToOption {
   ActiveTab = 'ActiveTab',
   AllTabs = 'AllTabs',
   Runtime = 'Runtime'
}


export type MessageSenderOptions = {
   toActiveTab?: boolean,
   toAllTabs?: boolean,
   toRuntime?: boolean,
   toTabId?: number,
   // to?: SendToOption,
}

export const isSendToType = function (
   options: MessageSenderOptions | SendToOption,
): options is SendToOption {
   return typeof options === 'string';
};

export const isMessageSenderOptions = function (
   options: MessageSenderOptions | SendToOption,
): options is MessageSenderOptions {
   return typeof options === 'object';
};

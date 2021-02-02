export enum MESSAGE_TYPE {
   OFFER_LIST_GET = 'OFFER_LIST_GET',
   OFFER_LIST_APPEND = 'OFFER_LIST_APPEND',
   OFFER_LIST_SET = 'OFFER_LIST_SET',
   OFFER_LIST_UPDATE_AT = 'OFFER_LIST_UPDATE_AT',
   OFFER_LIST_REMOVE_AT = 'OFFER_LIST_REMOVE_AT',

   OFFER_LIST_DID_UPDATE = 'OFFER_LIST_DID_UPDATE',
   OFFER_LIST_GET_RESPONSE = 'OFFER_LIST_GET_RESPONSE',

   GET_OFFER_BY_URL = 'GET_OFFER_BY_URL',
   GET_OFFER_BY_URL_RESPONSE = 'GET_OFFER_BY_URL_RESPONSE',
   GET_OFFER_INFO = 'GET_OFFER_INFO',
   SHOW_OFFER_INFO_ROW = 'INSERT_OFFER_INFO_ROW',

   RESTORE_BACKUP = 'RESTORE_BACKUP'
   // APPEND_JOB_DETAILS = 'APPEND_JOB_DETAILS',
}

export type MessageExceptionType = boolean

export enum OriginType {
   Tab = 'Tab',
   Background = 'Background',
   Popup = 'Popup',
   TableTab = 'TableTab',
   Options = 'Options'
}

export type SenderType = {
   uuid: string,
   originType: OriginType,
   requireException?: MessageExceptionType
}

export type Sender = {
   sender: SenderType,
   originalSender?: SenderType,
   isResponse?: boolean
}

export type Message<T = undefined> = {
   type: MESSAGE_TYPE,
   message: T,
   sender: Sender
}

export type PartialMessage<T = undefined> = Omit<Message<T>, 'message'>
   & Partial<Pick<Message<T>, 'message'>>

export type MessageResponse<T> = Message<T | string>

export type UUIDType = string;
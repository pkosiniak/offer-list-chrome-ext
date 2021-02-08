export enum MESSAGE_TYPE {
   // OfferList Requests
   OFFER_LIST_GET = 'OFFER_LIST_GET',
   OFFER_LIST_GET_BY_URL = 'OFFER_LIST_GET_BY_URL',
   OFFER_LIST_SET = 'OFFER_LIST_SET',
   OFFER_LIST_APPEND = 'OFFER_LIST_APPEND',
   OFFER_LIST_UPDATE_AT = 'OFFER_LIST_UPDATE_AT',
   OFFER_LIST_REMOVE_AT = 'OFFER_LIST_REMOVE_AT',
   // OfferList Responses
   OFFER_LIST_GET_RESPONSE = 'OFFER_LIST_GET_RESPONSE',
   OFFER_LIST_GET_BY_URL_RESPONSE = 'OFFER_LIST_GET_BY_URL_RESPONSE',
   OFFER_LIST_DID_UPDATE = 'OFFER_LIST_DID_UPDATE',

   // Settings Requests
   SETTINGS_GET = 'SETTINGS_GET',
   SETTINGS_AUTO_TOGGLE = 'SETTINGS_AUTO_TOGGLE',
   // Settings Responses
   SETTINGS_GET_RESPONSE = 'SETTINGS_GET_RESPONSE',
   SETTINGS_DID_UPDATE = 'SETTINGS_DID_UPDATE',

   // Direct Requests
   TOGGLE_OFFER_INFO_ROW = 'TOGGLE_OFFER_INFO_ROW',
   GET_OFFER_INFO = 'GET_OFFER_INFO',
   // RESTORE_BACKUP = 'RESTORE_BACKUP'

}

export type MessageExceptionType = boolean

export enum OriginType {
   Tab = 'Tab',
   Background = 'Background',
   Popup = 'Popup',
   TableTab = 'TableTab',
   Options = 'Options'
}

export type OfferByURL = string | {
   url: string,
   byName: string,
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
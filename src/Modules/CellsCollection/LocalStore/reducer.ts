import * as T from './types';

// const initialState: T.OfferState = {};

export const offerReducer = (
   state: T.OfferState,
   action: T.OfferAction,
): T.OfferState => {
   const { type, ...rest } = action;
   const {
      id,
      company,
      position,
      salary,
      links,
      requirements,
      notes,
      exposeDate,
      applicationDate,
   } = rest;
   switch (type) {
      case T.OFFER.ID:
         return {
            ...state,
            id,
         };
      case T.OFFER.COMPANY:
         return {
            ...state,
            company,
         };
      case T.OFFER.POSITION:
         return {
            ...state,
            position,
         };
      case T.OFFER.SALARY:
         return {
            ...state,
            salary,
         };
      case T.OFFER.LINKS:
         return {
            ...state,
            links,
         };
      case T.OFFER.REQUIREMENTS:
         return {
            ...state,
            requirements,
         };
      case T.OFFER.NOTES:
         return {
            ...state,
            notes,
         };
      case T.OFFER.EXPOSE_DATE:
         return {
            ...state,
            exposeDate,
         };
      case T.OFFER.APPLICATION_DATE:
         return {
            ...state,
            applicationDate,
         };
      case T.OFFER.ALL:
         return {
            ...rest,
         };
      default:
         return state;
   }
};
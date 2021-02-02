import { Job } from '../../../types/job';

export enum OFFER {
   ID = 'OFFER_ID',
   COMPANY = 'OFFER_COMPANY',
   POSITION = 'OFFER_POSITION',
   SALARY = 'OFFER_SALARY',
   LINKS = 'OFFER_LINKS',
   REQUIREMENTS = 'OFFER_REQUIREMENTS',
   NOTES = 'OFFER_NOTES',
   EXPOSE_DATE = 'OFFER_EXPOSE_DATE',
   APPLICATION_DATE = 'OFFER_APPLICATION_DATE',
   ALL = 'OFFER_ALL'
}

type Action = { type: OFFER }

export type OfferState = Partial<Job> 
export type OfferAction = OfferState & Action;

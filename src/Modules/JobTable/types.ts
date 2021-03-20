import { Offer } from '../../types/job';
import { headingRowNames } from '../common/common';

export enum SortOrder {
   NONE = 'NONE',
   ASC = 'ASC',
   DESC = 'DESC'
}

export type TableKeys = Omit<typeof headingRowNames, 'Remove'>

export type SortBy = keyof TableKeys

export type OrderType = SortOrder.ASC | SortOrder.DESC

export type SortType = {
   by: SortBy,
   order: OrderType
}

export type SortFunction = (order: OrderType) => (fst: Offer, snd: Offer) => number

export type SortByType = Record<SortBy, SortFunction>


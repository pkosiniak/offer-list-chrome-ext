import { Offer } from '../../types/job';
import { headingRowNames } from '../common/common';

export enum SortOrder {
   NONE = 'NONE',
   ASC = 'ASC',
   DESC = 'DESC'
}

export type FilterKeyType = string;

export type TableKeys = Omit<typeof headingRowNames, 'Remove'>

export type ColumnKey = keyof TableKeys

export type OrderType = SortOrder.ASC | SortOrder.DESC

export type SortType = {
   by: ColumnKey,
   order: OrderType
}

export type FilterType = {
   by: ColumnKey,
   filter: FilterKeyType
}

export type SortFunction = (order: OrderType) => (fst: Offer, snd: Offer) => number

export type SortByType = Record<ColumnKey, SortFunction>


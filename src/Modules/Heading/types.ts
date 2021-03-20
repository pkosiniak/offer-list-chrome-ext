import { Dispatch, SetStateAction } from 'react';
import { CellWidth } from '../CellsCollection/modules/Cells/shared/types';
import { FilterType, SortType } from '../JobTable/types';

export type WidthRange = {
   min: CellWidth,
   max: CellWidth,
   default: CellWidth
}

export type SortingProps = {
   sort?: SortType,
   setSort: Dispatch<SetStateAction<SortType | undefined>>
}

export type FilteringProps = {
   filter?: FilterType,
   setFilter: Dispatch<SetStateAction<FilterType | undefined>>
}
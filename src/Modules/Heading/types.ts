import { CellWidth } from '../CellsCollection/modules/Cells/shared/types';

export type WidthRange = {
   min: CellWidth,
   max: CellWidth,
   default: CellWidth
}

export enum SortDirection {
   NONE = 'NONE',
   ASC = 'ASC',
   DESC = 'DESC'
}

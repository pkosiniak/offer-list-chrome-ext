import { OfferLink, StackRequirements } from '../../../../../types/job';

export enum LIST_CELL {
   LINK_UPDATE = 'LINK_UPDATE',
   REQUIREMENTS_UPDATE = 'REQUIREMENTS_UPDATE'
}

export type LinkCellState = {
   links?: OfferLink[],
};
export type LinkCellAction = {
   type: LIST_CELL.LINK_UPDATE
} & LinkCellState;

export type RequirementsCellState = {
   requirements?: StackRequirements[]
};
export type RequirementCellAction = {
   type: LIST_CELL.REQUIREMENTS_UPDATE
} & RequirementsCellState;

export enum EXPANDABLE {
   ALL = 'EXPAND_ALL',
   ACTIVE = 'EXPAND_ACTIVE',
   DISABLE = 'EXPAND_DISABLE',
   EXPAND = 'EXPAND_EXPAND',
   HEIGHT = 'EXPAND_HEIGHT'
}

export type ExpandableState = {
   isActive?: boolean,
   isDisabled?: boolean,
   isExpanded?: boolean,
   refHeight?: number,
}

export type ExpandableAction = {
   type: EXPANDABLE,
} & ExpandableState;
import * as T from './types';


export const linkCellReducer = (
   state: T.LinkCellState,
   action: T.LinkCellAction,
): T.LinkCellState => {
   const { type, links } = action;
   switch (type) {
      case T.LIST_CELL.LINK_UPDATE:
         return {
            links,
         };
      default:
         return {
            ...state,
         };
   }
};


export const requirementCellReducer = (
   state: T.RequirementsCellState,
   action: T.RequirementCellAction,
): T.RequirementsCellState => {
   const { type, requirements } = action;
   switch (type) {
      case T.LIST_CELL.REQUIREMENTS_UPDATE:
         return {
            requirements,
         };
      default:
         return {
            ...state,
         };
   }
};

export const expandableStateReducer = (
   state: T.ExpandableState,
   action: T.ExpandableAction,
): T.ExpandableState => {
   const { type, isActive, isDisabled, isExpanded, refHeight } = action;
   switch (type) {
      case T.EXPANDABLE.ACTIVE:
         return {
            ...state,
            isActive,
         };
      case T.EXPANDABLE.DISABLE:
         return {
            ...state,
            isDisabled,
         };
      case T.EXPANDABLE.EXPAND:
         return {
            ...state,
            isExpanded,
         };
      case T.EXPANDABLE.HEIGHT:
         return {
            ...state,
            refHeight,
         };
      case T.EXPANDABLE.ALL:
         return {
            ...action,
         };
      default:
         return {
            ...state,
         };
   }
};
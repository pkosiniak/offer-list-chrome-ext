import { css } from 'styled-components';
import { borderBold } from '../../../../../Styles/theme';
import * as T from './types.parts';

export const switchWidth = (width?: T.CellWidth) => {
   switch (width) {
      case T.CellWidth.XSmall:
         return 40;
      case T.CellWidth.Small:
         return 80;
      case T.CellWidth.Medium:
         return 120;
      case T.CellWidth.Large:
         return 160;
      case T.CellWidth.XLarge:
         return 200;
      case T.CellWidth.XXLarge:
         return 240;
      case T.CellWidth.X3Large:
         return 280;
      default:
         return 120;
   }
};

const singleExt = 36;

export const getWidth = ({ width }: T.WidthType) => css`
   width: ${switchWidth(width)}px;
`;
export const DEPRECATED_getExtendedWidth = ({ width }: T.WidthType) => css`
   width: ${switchWidth(width) + 2 * 36}px;
`;
export const DEPRECATED_pickWidth = (
   { isDisabled, width }: T.WidthType & T.IsDisabledType,
) => isDisabled
   ? getWidth({ width })
   : DEPRECATED_getExtendedWidth({ width });

export const getMaxWidth = ({ width }: T.WidthType) => css`
   max-width: ${switchWidth(width)}px;
`;
export const DEPRECATED_getMaxWidth = ({ width }: T.WidthType) => css`
   max-width: ${switchWidth(width) + 2 * 36}px;
`;
export const DEPRECATED_getExtendedMaxWidth = ({ width }: T.WidthType) => css`
   max-width: ${switchWidth(width) + 3 * 36}px;
`;
export const DEPRECATED_pickMaxWidth = (
   { isDisabled, width }: T.WidthType & T.IsDisabledType,
) => isDisabled
   ? DEPRECATED_getMaxWidth({ width })
   : DEPRECATED_getExtendedMaxWidth({ width });

export const widthPicker = ({
   width,
   extend = 0,
}: T.WidthType & T.ExtendedType) => getWidth({
   width: (width || T.CellWidth.Default) + extend,
});

export const maxWidthPicker = ({
   width,
   extend = 0,
}: T.WidthType & T.ExtendedType) => DEPRECATED_getMaxWidth({
   width: (width || T.CellWidth.Default) + extend,
});

export const onExpanded = ({ isExpanded }: T.IsExpandedType) => isExpanded && css`
   overflow: hidden;
   :disabled {
      ${borderBold}
   }
`;

export const changeDirection = (
   { isDisabled, isExpanded }: T.StyledULProps,
) => isDisabled && !isExpanded && css`
   flex-direction: row;
   flex-wrap: wrap;
   overflow: hidden;
   overflow-y: auto;
`;

export const adjustHeight = (
   { height, isExpanded, isDisabled }: T.ULWrapperProps,
) => !isExpanded && isDisabled && height && css`
   height: ${height}px;
`;

export const onExpand = (
   { isExpanded }: T.IsExpandedType,
) => !isExpanded && css`
   margin-right: 6px;
`;

export const onTextExpand = (
   { isExpanded }: T.IsExpandedType,
) => isExpanded && css`
   padding-left: 40px;
   text-indent: -40px;
`;

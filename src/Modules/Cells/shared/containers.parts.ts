import styled, { css } from 'styled-components';
import Box from '../../../Components/Box/Box';
import * as U from './utils.parts';
import * as T from './types.parts';
import UL from '../../../Components/List/UL';
import { themeWithBorder, scrollBar, borderLightBold, borderBold } from '../../../Styles/theme';
import Text from '../../../Components/Text/Text';
import { color } from '../../../Styles/color';

export const Wrapper = styled(Box) <T.DEPRECATED_WrapperProps & T.ExtendableWidthProps>`
   flex-grow: 1;
   ${U.maxWidthPicker}
`;

export const AbsoluteWrapper = styled(Box) <T.AbsoluteWrapperProps>`
   position: absolute;
   margin-right: 24px;
   ${U.getWidth}
`;

export const Placeholder = styled(Box) <T.PlaceholderProps>`
   ${U.getWidth}
   ${({isDisabled}) => !isDisabled && css`margin-right: 10px;` }
   /* ${U.DEPRECATED_pickWidth} */
`;

export const ExpandableWrapper = styled(Box)`
   width: inherit;
`;

export const ULWrapper = styled(Box) <T.ULWrapperProps>`
   ${U.adjustHeight}
   ${U.onExpanded}
   flex-grow: 1;
   ${themeWithBorder.darkLighter}
   ${({ isDisabled }) => isDisabled && themeWithBorder.dark}
   ${({ isExpanded}) => isExpanded && borderBold}
   ${({ isActive }) => isActive && borderLightBold}
`;


export const StyledUL = styled(UL) <T.StyledULProps>`
   display:flex;
   flex-grow: 1;
   flex-direction: column;
   ${U.changeDirection}
   ${scrollBar}
`;

export const InputEditorWrapper = styled(Box) <T.InputEditorWrapperProps>`
   ${U.getWidth}
   border-bottom: 2px solid ${color.lighter};
   padding-bottom: 4px;
   margin-bottom: 4px;
`;

export const SpaceWrapper = styled(Box)`
   justify-content: space-between;
`;

export const TextWrapper = styled(Text) <T.IsExpandedType>`
   margin-right: 0;
   ${U.onTextExpand}
`;

export const RequirementWrapper = styled(Box) <T.IsExpandedType>`
   ${U.onExpand}
`;
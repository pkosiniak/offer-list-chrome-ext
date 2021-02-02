import styled from 'styled-components';
import Button from '../../../../../Components/Button/Button';
import CheckBox from '../../../../../Components/Input/CheckBox/CheckBox';
import DateInput from '../../../../../Components/Input/DateInput/DateInput';
import TextArea from '../../../../../Components/Input/TextInput/TextArea';
import TextInput from '../../../../../Components/Input/TextInput/TextInput';
import Link from '../../../../../Components/Link/Link';
import * as U from './utils.parts';
import * as T from './types.parts';
import { borderBold, borderLightBold, theme } from '../../../../../Styles/theme';
import NumberInput from '../../../../../Components/Input/NumberInput/NumberInput';
import { color } from '../../../../../Styles/color';

export const StyledTextInput = styled(TextInput) <T.WidthType>`
   :disabled {
      ${U.DEPRECATED_getMaxWidth}
   }
   ${U.getWidth};
`;

export const StyledNumberInput = styled(NumberInput) <T.WidthType>`
   ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
      visibility: visible;
   }
   :disabled {
      ${U.DEPRECATED_getMaxWidth}
   }
   ${U.getWidth};
`;


export const StyledTextArea = styled(TextArea) <T.IsExpandedType & Partial<T.IsActiveType>>`
   resize: none;
   ${U.onExpanded}
   ${({ isActive }) => isActive && borderLightBold}
`;

export const StyledDateInput = styled(DateInput) <T.WidthType>`
   ::-webkit-calendar-picker-indicator {
      /* background-color: red; */
      ${theme.darkLighter}
      /* background-color: ${color.grayLight}; */
      position: absolute;
      margin-left: -17px;
      padding: 6px;
      /* fill: ${color.lightest} */
      /* background-color: radial-gradient(circle, ${color.grayLight} 30%, ${color.gray} 70%); */
   }
   
   /* margin: 0; */
   /* padding: 0; */
   padding: 6px 20px;
   width: 40px;
`;

export const StyledCheckbox = styled(CheckBox)`
   
`;

export const StyledLink = styled(Link)`
   word-break: break-all;
`;

export const ExpandButton = styled(Button)`

`;

export const AddButton = styled(Button)`
   
`;

export const RemoveButton = styled(Button)`
   
`;
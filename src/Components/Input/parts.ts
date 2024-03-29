import styled, { css } from 'styled-components';
import { font } from '../../Styles/font';
import { theme, themeWithBorder } from '../../Styles/theme';

const commonStyles = css`
   ${font.medium}
   padding: 6px;
   :disabled {
      ${themeWithBorder.dark}
   }
   ${themeWithBorder.darkLighter}
`;

export const StyledInput = styled.input`
   ${commonStyles}
`;

export interface StyledTextAreaProps {
   height?: number | string;
}
export const TextArea = styled.textarea<StyledTextAreaProps>`
   ${commonStyles}
   height: ${({ height }) => height}px;
   
`;

export const Wrapper = styled.div`
   
`;

export const Label = styled.label`
   ${theme.dark}
`;

export const FileInput = styled.input`
  
`;

export const Select = styled.select`
   ${commonStyles}
   :disabled {
      opacity: unset;
   }
`;

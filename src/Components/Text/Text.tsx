import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { font } from '../../Styles/font';
import { theme } from '../../Styles/theme';

const Paragraph = styled.p`
   ${font.medium}
   margin: 6px;
   ${theme.dark}
`;

const Span = styled.span`
   ${font.medium}
   ${theme.dark}
`;


interface TextProps extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
   inline?: boolean,
   text?: string,
}

const Text: React.FC<TextProps> = ({
   inline,
   text,
   children,
   ...rest
}) => inline ? (
   <Span {...rest} >
      {children || text}
   </Span>
) : (
   <Paragraph {...rest} >
      { children || text}
   </Paragraph >
);

export default Text;

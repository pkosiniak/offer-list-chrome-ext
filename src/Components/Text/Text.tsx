import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { font } from '../../Styles/font';
import { theme } from '../../Styles/theme';

const Paragraph = styled.p`
   ${font.medium}
   margin: 6px;
   ${theme.dark}
`;

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {

}

const Text: React.FC<TextProps> = ({
   children,
   ...rest
}) => {
   return (
      <Paragraph
         {...rest}
      >
         {children}
      </Paragraph>
   );
};

export default Text;

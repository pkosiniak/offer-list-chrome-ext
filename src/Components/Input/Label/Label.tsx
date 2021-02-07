import React, { HTMLAttributes, useRef } from 'react';
import * as P from '../parts';
import styled from 'styled-components';

export interface LabelProps {
   label?: string,
   id?: string,
   inputPosition?: 'before' | 'after' | 'insideBefore' | 'insideAfter',
   wrapperProps?: HTMLAttributes<HTMLDivElement>
   labelProps?: Omit<HTMLAttributes<HTMLLabelElement>, 'htmlFor'>
}

const Wrapper = styled(P.Wrapper)`
   display: flex;
   align-items: center;
`;

const Label: React.FC<LabelProps> = ({
   label,
   id,
   inputPosition = 'after',
   wrapperProps,
   labelProps,
   children,
}) => {
   const ref = useRef<HTMLLabelElement>(null);
   return label !== undefined
      ? (
         <Wrapper
            onClick={wrapperProps?.onClick || (() => ref.current?.click())}
            {...wrapperProps}
         >
            {inputPosition === 'before' && children}
            <P.Label
               ref={ref}
               htmlFor={id}
               {...labelProps}
            >
               {inputPosition === 'insideBefore' && children}
               {label}
               {inputPosition === 'insideAfter' && children}
            </P.Label>
            {inputPosition === 'after' && children}
         </Wrapper>
      ) : (
         <>
            {children}
         </>
      );
};

export default Label;

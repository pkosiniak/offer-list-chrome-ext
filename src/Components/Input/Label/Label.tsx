import React, { HTMLAttributes, useRef } from 'react';
import * as P from '../parts';
import styled from 'styled-components';
import { LabelWrapper } from '../ToggleSwitch/parts';

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

const StyledLabel = styled(P.Label)`
   display: flex;
   justify-content: space-between;
`;

const InnerWrapper = styled.span`
   display: flex;
   flex-grow: 1;
   justify-content: center;
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
   const isInside = !!inputPosition.match('inside');
   const Label = isInside
      ? (<>
         {inputPosition === 'insideBefore' && children}
         <InnerWrapper>
            {label}
         </InnerWrapper>
         {inputPosition === 'insideAfter' && children}
      </>)
      : null;

   return label !== undefined
      ? (
         <Wrapper
            {...wrapperProps}
         >
            {inputPosition === 'before' && children}
            <StyledLabel
               ref={ref}
               htmlFor={id}
               {...labelProps}
            >
               {Label}
            </StyledLabel>
            {inputPosition === 'after' && children}
         </Wrapper>
      ) : (
         <>
            {children}
         </>
      );
};

export default Label;

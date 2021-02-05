import React, { DetailedHTMLProps, ForwardedRef, forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface WrapperProps {
   vertical?: boolean;
}

export const BoxWrapper = styled.div<WrapperProps>`
   display: flex;
   flex-direction: ${({ vertical: isVertical }) => isVertical ? 'column' : 'row'};
   `;

interface BoxProps extends WrapperProps {
   horizontal?: boolean;
   h?: boolean;
   v?: boolean;
}

type BoxPropsType = BoxProps & HTMLAttributes<HTMLDivElement>

const Box: ForwardRefRenderFunction<HTMLDivElement, BoxPropsType>  = ({
   vertical,
   v,
   horizontal, 
   h,
   children,
   ...rest
}, ref) => {
   return (
      <BoxWrapper ref={ref} vertical={vertical || v} {...rest}>
         {children}
      </BoxWrapper>
   );
};

export default forwardRef<HTMLDivElement, BoxPropsType>(Box);
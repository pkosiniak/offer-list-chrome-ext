import React, {
   ButtonHTMLAttributes,
   forwardRef,
   ForwardRefRenderFunction,
   MouseEvent,
   MutableRefObject,
   TouchEvent,
   useEffect,
   useRef,
} from 'react';
import { StyledButton, StyledButtonProps } from './parts';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   text?: string,
   onClick?: (event?: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void
}

type ButtonPropsType = ButtonProps & StyledButtonProps

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonPropsType> = ({
   text,
   onClick,
   isVisible,
   children,
   ...rest
}, ref) => {
   const innerRef = useRef<HTMLButtonElement>(null);

   const onInput = (
      event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
   ) => onClick && onClick(event);

   useEffect(() => {
      const button = innerRef.current || (ref as MutableRefObject<HTMLButtonElement>).current;
      if (!button) return;
      const listener = (event: any, add: boolean) => {
         if (!button) return;
         button.onclick = add ? onClick as any : null;
         add && onInput(event);
      };
      innerRef.current?.addEventListener('touchstart', event => listener(event, false));
      innerRef.current?.addEventListener('touchEnd', event => listener(event, true));
      return () => {
         innerRef.current?.removeEventListener('touchstart', event => listener(event, false));
         innerRef.current?.addEventListener('touchEnd', event => listener(event, true));
      };
   }, []);

   return (
      <StyledButton
         ref={ref || innerRef}
         isVisible={isVisible === undefined || isVisible}
         onClick={onInput}
         {...rest}
      >
         {children || text}
      </StyledButton>
   );
};

export default forwardRef<HTMLButtonElement, ButtonPropsType>(Button);

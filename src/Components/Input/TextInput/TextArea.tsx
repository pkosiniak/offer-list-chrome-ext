import React, { TextareaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useID } from '../../../pages/utils/useID';
import { usePrevProps } from '../../../pages/utils/usePrevProps';
import { useRefEffect } from '../../../pages/utils/useRefEffect';
import * as P from '../parts';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   initialHeight?: number;
   autoResize?: boolean;
   label?: string;
}


const TextArea: React.FC<TextAreaProps> = ({
   autoResize,
   initialHeight,
   label,
   id,
   value,
   ...rest
}) => {
   const [ref, height, setHeight] = useRefEffect<number, HTMLTextAreaElement>(
      (ref, setState) => {
         setState(ref.current?.scrollHeight);
      },
   );
   const ID = useID({id, prefix: 'textarea' });
   const prevValue = usePrevProps(value);
   useEffect(() => {
      if (!prevValue)
         setHeight(ref.current?.scrollHeight);
   }, [value]);

   const Component = () => <P.TextArea
      id={ID}
      ref={ref}
      height={autoResize ? height : initialHeight}
      // style={{ ...rest.style, height: height + 'px' }}
      onInput={() => setHeight(ref.current?.scrollHeight)}
      value={value}
      {...rest}
   />;

   return label
      ? (
         <P.Wrapper>

            <P.Label htmlFor={ID}>
               {label}
            </P.Label>
            {Component()}
         </P.Wrapper>
      ) : (
         Component()
      );
};

export default TextArea;

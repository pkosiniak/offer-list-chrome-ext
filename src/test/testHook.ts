import { createElement } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

type Result<R> = { current: R | null }

export const testHook = <T, H>(
   hook: (args: T) => H,
   args: T,
) => {
   const result: Result<H> = { current: null };

   const TestComponent = (props: T) => {
      result.current = hook(props);
      return null;
   };

   const container = document.createElement('div');

   act(() => {
      render(
         createElement(TestComponent, args),
         document.body.appendChild(container),
      );
   });

   return result.current;
};


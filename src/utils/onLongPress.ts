import { TouchEvent, useState } from 'react';

enum PressState {
   None = 'None',
   Started = 'Started',
   Over = 'Over'
}

export const onLongPress = (
   callback?: (event: TouchEvent) => void,
   ms: number = 500,
) => {
   const [pressState, setPressState] = useState(PressState.None);
   let timer: number;
   const onStart = (event: TouchEvent) => {
      setPressState(PressState.Started);
      timer = (setTimeout(() => {
         setPressState(PressState.Over);
      }, ms)) as unknown as number;
   };

   const onEnd = (event: TouchEvent) => {
      if (pressState !== PressState.Over)
         return clearTimeout(timer);
      callback && callback(event);
      setPressState(PressState.None);
   };
   return {
      onTouchStart: onStart,
      onTouchEnd: onEnd,
   };
};

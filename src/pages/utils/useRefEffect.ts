import { useRef, useState, useEffect, RefObject, SetStateAction, Dispatch } from 'react';

export const useRefEffect = <
   State,
   Element extends HTMLElement = HTMLElement,
   >(
      callback: (
         ref: RefObject<Element>,
         setState: Dispatch<SetStateAction<State | undefined>>
      ) => void,
   ): [
      RefObject<Element>, State | undefined, 
      Dispatch<SetStateAction<State | undefined>>
   ] => {
   const ref = useRef<Element>(null);
   const [state, setState] = useState<State | undefined>(undefined);
   useEffect(() => {
      callback(ref, setState);
   }, [ref]);
   return [ref, state, setState];
};
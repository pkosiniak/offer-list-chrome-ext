import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { deepCompare } from '../utils/deepCompare';

export const useMapPropsToState = <T>(props: T): [T, Dispatch<SetStateAction<T>>] => {
   const [state, setState] = useState(props);
   useEffect(() => {
      !deepCompare(props, state) && setState(props);
   }, [props]);
   return [state, setState];
};
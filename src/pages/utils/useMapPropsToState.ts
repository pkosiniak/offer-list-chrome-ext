import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useMapPropsToState = <T>(props: T): [T, Dispatch<SetStateAction<T>>] => {
   const [state, setState] = useState(props);
   useEffect(() => {
      JSON.stringify(props) !== JSON.stringify(state) && setState(props);
   }, [props]);
   return [state, setState];
};
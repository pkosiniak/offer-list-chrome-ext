import { Dispatch, useEffect, useReducer } from 'react';
import { deepCompare } from '../../utils/deepCompare';
import { deepCopy } from '../../utils/deepCopy';
import { usePrevProps } from './usePrevProps';
import { useCreateLocalStore } from './useReducerLogger';

// (state: ListCellState, action: ListCellAction) => ListCellState;
type Reducer<S extends {}, A extends S> = (state: S, action: A) => S

export const useReducerEffect = <S extends {}, A extends S>(
   reducer: Reducer<S, A>,
   initialState: S,
   initAction: A,
): [S, Dispatch<A>] => {
   const [state, dispatch] = useCreateLocalStore(reducer, deepCopy(initialState));
   const prevInitState = usePrevProps(initialState);
   useEffect(() => {
      // JSON.stringify(initialState) !== JSON.stringify(state)
      // && initialState
      // JSON.stringify(prevState) !== JSON.stringify(initialState)
      // console.log('useReducerEffect', initialState && !deepCompare(prevState, state));
      // console.log(
      //    'STATE COMPARE ',
      //    reducer.name,
      //    '\n' + JSON.stringify(prevInitState),
      //    '\n' + JSON.stringify(state),
      //    '\n' + JSON.stringify(initialState),
      //    '\n' + JSON.stringify(initAction),
      //    '\n',
      //    !deepCompare(initialState, state),
      //    '\n',
      //    !deepCompare(prevInitState, state),
      //    '\n',
      //    !!initialState,
      //    '\n',
      //    initialState && !deepCompare(initialState, state),
      // );
      !!initialState
         && !deepCompare(prevInitState, initialState)
         && !deepCompare(initialState, state)
         && dispatch(deepCopy(initAction));
   }, [initialState]);
   return [state, dispatch];
};

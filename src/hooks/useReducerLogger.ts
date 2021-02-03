/* eslint-disable no-console */
import { useReducer } from 'react';
import { deepCompare } from '../utils/deepCompare';
import { deepCopy } from '../utils/deepCopy';
import { useID } from './useID';

type Reducer<S extends {}, A extends S> = (state: S, action: A) => S

export const useReducerLogger = <S extends {}, A extends S>(
   reducer: Reducer<S, A>,
   id: string,
) => (
      state: S, action: A,
   ) => {
      const date = new Date(Date.now());
      console.log(
         '%cLOCAL_STORE_LOGGER: '
         + '%c' + reducer.name
         + '%c ' + id
         + ' \t%c' + date.toLocaleTimeString()
         + '%c:' + date.getMilliseconds(),
         'font-weight: bold;',
         'font-style: italic;',
         'color: #fcc; font-style: italic; font-size: 11px;',
         'color: #ccc; font-size: 11px;',
         'color: #ccc; font-size: 10px;',
      );
      const stateCopy = deepCopy(state);
      console.log('\t%cPREV STATE: ', 'color: #f00; font-weight: bold;', stateCopy),
      console.log('\t%cACTION: ', 'color: #ff0; font-weight: bold;', action);
      const nextState = reducer(state, action);
      console.log('\t%cNEXT STATE: ', 'color: #0f0; font-weight: bold;', nextState);
      console.log('\t%cState compare: are equal? ', 'color: #bbb', deepCompare(stateCopy, nextState));
      return nextState;
   };

export const useCreateLocalStore = <S extends {}, A extends S>(
   reducer: Reducer<S, A>,
   initialState: S,
) => useReducer(
      useReducerLogger(reducer, useID({})),
      initialState,
   );
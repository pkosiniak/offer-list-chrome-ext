import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';

export const createAppStore = () => {
   const middleware = applyMiddleware(logger);
   return createStore(
      rootReducer,
      middleware,
   );
};
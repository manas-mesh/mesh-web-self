import { combineReducers, Middleware } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import * as modules from '../services/modules';

import { api } from '../services/api';

const reducers = combineReducers({
  api,
  ...Object.values(modules).reduce(
    (acc, module) => ({
      ...acc,
      [module.reducerPath]: module.reducer,
    }),
    {},
  ),
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({}).concat(api.middleware as Middleware);
    return middlewares;
  },
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export { store };

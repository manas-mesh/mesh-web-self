// Must watch https://www.youtube.com/watch?v=9zySeP5vH9c&t=25s

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import loggedInEmployeeReducer from '../features/loggedInEmployee-slice';
import navBarCustomItems from '../features/navBarCustomItems-slice';
import orgDataReducer from '../features/orgData-slice';
import reviewFormFillingReducer from '../features/reviewFormFilling-slice';

const reducers = {
  loggedInEmployee: loggedInEmployeeReducer,
  orgData: orgDataReducer,
  reviewFormFilling: reviewFormFillingReducer,
  navBarCustomItems: navBarCustomItems,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    return middlewares;
  },
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export { store };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

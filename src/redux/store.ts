import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import mapReducer from './reducers/map';

export const store = configureStore({
  reducer: {mapReducer,}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

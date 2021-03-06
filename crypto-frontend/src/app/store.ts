import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authApi } from '../apis/auth.api';
import { usersApi } from '../apis/users.api';
import counterReducer from '../features/counter/counterSlice';
import dupa from '../slices/auth.slice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    counter: counterReducer,
    dupa,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

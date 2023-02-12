import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { foodAPI } from '../sevices/foodService';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';

// all reducers in one combine reducer
const rootReducer = combineReducers({
    [foodAPI.reducerPath]: foodAPI.reducer,
    user: userReducer,
    modal: modalReducer,
});

// initialize store with reducer and adding middleware
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(foodAPI.middleware);
    }
  });
};

export type RootState = ReturnType<typeof rootReducer>; // use in typed Selector, path: ../hooks/redux.ts
type AppStore = ReturnType<typeof setupStore>; // 0
export type AppDispatch = AppStore['dispatch']; // use in typed dispatch, path: ../hooks/redux.ts

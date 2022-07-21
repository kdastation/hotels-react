import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { authSlice } from "./slices/auth-slice";
import { hotelsSlice } from "./slices/hotels-slice";
import { favoritesHotelsSlice } from "./slices/favorites-hotels-slice";
import { filterHotelsSlice } from "./slices/filters-hotels-slice";
import { hotelsWatcher } from "./sagas/hotels-saga";

const rootReducer = {
  [authSlice.name]: authSlice.reducer,
  [hotelsSlice.name]: hotelsSlice.reducer,
  [favoritesHotelsSlice.name]: favoritesHotelsSlice.reducer,
  [filterHotelsSlice.name]: filterHotelsSlice.reducer,
};

const saga = createSagaMiddleware();

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [saga],
  });
};

export const store = createReduxStore();
saga.run(hotelsWatcher);
export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

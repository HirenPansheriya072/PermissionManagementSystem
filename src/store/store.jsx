import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { myApi } from './Slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    [myApi.reducerPath]: myApi.reducer,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(myApi.middleware),
  });

export const persistor = persistStore(store);

setupListeners(store.dispatch);

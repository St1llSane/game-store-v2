import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import gamesSlice from './slices/gamesSlice'
import searchGamesSlice from './slices/searchGamesSlice'
import cartPreviewSlice from './slices/cartPreviewSlice'
import filtersSlice from './slices/filtersSlice'
import cartGamesSlice from './slices/cartGamesSlice'
import currentGameSlice from './slices/currentGameSlice'

const rootReducer = combineReducers({
  gamesSlice,
  searchGamesSlice,
  cartPreviewSlice,
  filtersSlice,
  cartGamesSlice,
  currentGameSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartGamesSlice', 'currentGameSlice'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

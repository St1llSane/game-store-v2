import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import searchGamesSlice from './slices/searchGamesSlice'
import cartPreviewSlice from './slices/cartPreviewSlice'
import cartGamesSlice from './slices/cartGamesSlice'

export const store = configureStore({
  reducer: {
    gamesSlice,
    searchGamesSlice,
    cartPreviewSlice,
    cartGamesSlice,
  },
})

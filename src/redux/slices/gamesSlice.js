import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGames = createAsyncThunk(
  'games/fetchGamesStatus',
  async ({ searchByInput, searchByFilter }) => {
    const { data } = await axios.get(
      `https://639df5493542a2613053e993.mockapi.io/games?${searchByInput}${searchByFilter}`
    )
    return data
  }
)

const initialState = {
  games: [],
  status: 'loading',
  currentGame: null,
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload
    },
    resetCurrentGame: (state) => {
      state.currentGame = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.games = []
      state.status = 'loading'
    })
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchGames.rejected, (state) => {
      state.games = []
      state.status = 'unsuccess'
    })
  },
})

export const gamesSelector = (state) => state.gamesSlice
export const currentGameSelector = (state) => state.gamesSlice.currentGame

export const { setCurrentGame, resetCurrentGame, changeInCartStatus } =
  gamesSlice.actions

export default gamesSlice.reducer

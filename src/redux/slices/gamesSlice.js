import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGames = createAsyncThunk(
  'games/fetchGamesStatus',
  async () => {
    const { data } = await axios.get(
      'https://639df5493542a2613053e993.mockapi.io/games'
    )
    return data
  }
)

const initialState = {
  games: [],
  status: 'loading',
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
		changeInCartStatus: (state, action) => {
			state.games = action.payload
		}
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
export const addBtnSelector = (state) => state.gamesSlice.addBtnIsActive

export const { changeInCartStatus } = gamesSlice.actions

export default gamesSlice.reducer

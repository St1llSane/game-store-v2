import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  gamesPerPage: 9,
  lastGameOnPageIndex: null,
  firstGameOnPageIndex: null,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setLastGameOnPageIndex: (state) => {
      state.lastGameOnPageIndex = state.currentPage * state.gamesPerPage
    },
    setFirstGameOnPageIndex: (state) => {
      state.firstGameOnPageIndex =
        state.lastGameOnPageIndex - state.gamesPerPage
    },
  },
})

export const paginationSelector = (state) => state.paginationSlice

export const {
  setCurrentPage,
  setLastGameOnPageIndex,
  setFirstGameOnPageIndex,
} = paginationSlice.actions

export default paginationSlice.reducer

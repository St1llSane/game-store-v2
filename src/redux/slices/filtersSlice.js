import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    resetFilters: (state) => {
      state.activeFilter = ''
    },
  },
})

export const activeFilterSelector = (state) => state.filtersSlice.activeFilter

export const { setActiveFilter, resetFilters } = filtersSlice.actions

export default filtersSlice.reducer

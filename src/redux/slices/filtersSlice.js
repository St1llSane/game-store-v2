import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter: '',
  isFiltersVisible: false,
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
    setIsFiltersVisible: (state, action) => {
      state.isFiltersVisible = action.payload
    },
  },
})

export const activeFilterSelector = (state) => state.filtersSlice.activeFilter
export const visibilityFiltersSelector = (state) => state.filtersSlice.isFiltersVisible

export const { setActiveFilter, resetFilters, setIsFiltersVisible } =
  filtersSlice.actions

export default filtersSlice.reducer

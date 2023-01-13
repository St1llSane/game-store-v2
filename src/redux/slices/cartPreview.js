import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisible: false,
}

const cartPreview = createSlice({
  name: 'cartPreview',
  initialState,
  reducers: {
    setIsVisible: (state, action) => {
      state.isVisible = action.payload
    },
  },
})

export const isVisibleSelector = (state) => state.cartPreview.isVisible

export const { setIsVisible } = cartPreview.actions

export default cartPreview.reducer

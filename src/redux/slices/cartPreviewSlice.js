import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisible: false,
}

const cartPreviewSlice = createSlice({
  name: 'cartPreview',
  initialState,
  reducers: {
    setIsVisible: (state, action) => {
      state.isVisible = action.payload
    },
  },
})

export const isVisibleSelector = (state) => state.cartPreviewSlice.isVisible

export const { setIsVisible } = cartPreviewSlice.actions

export default cartPreviewSlice.reducer

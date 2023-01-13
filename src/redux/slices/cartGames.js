import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartGames = createSlice({
  name: 'cartGames',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload
    },
    removeFromCart: (state, action) => {
      state.cart = action.payload
    },
  },
})

export const cartSelector = (state) => state.cartGames.cart

export const { addToCart, removeFromCart } = cartGames.actions

export default cartGames.reducer

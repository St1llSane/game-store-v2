import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartGamesSlice = createSlice({
  name: 'cartGames',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((game) => game.id !== action.payload)
    },
  },
})

export const cartSelector = (state) => state.cartGamesSlice.cart

export const { addToCart, removeFromCart } = cartGamesSlice.actions

export default cartGamesSlice.reducer

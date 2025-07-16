import { createSlice } from "@reduxjs/toolkit";
import { clearCartsFromLocal, getCartsFromLocal, setCartsToLocal } from "../local/local";



export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },
  reducers: {

    //tapailey add garna khojeko product cart ko arrey ma paila nai xa ki nai chek garxa
    //yedi xa vaney update garxa natra add garxa
    setToCart: (state, action) => {
        //add garna khojeko product already array ma xa vani update hunxa
      const isExist = state.carts.find((cart) => cart._id === action.payload._id);
      if (isExist) {
        state.carts = state.carts.map((cart) => cart._id === isExist._id ? action.payload : cart);
      } else {
        state.carts.push(action.payload); //natra add hunxa product array ma
      }
      setCartsToLocal(state.carts); //array ma add vako xa vani update vayera add hunxa ani changes vako xa vani ni update vayera add hunxa

    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart._id !== action.payload);
      setCartsToLocal(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      clearCartsFromLocal();
    }

  }
});
export const { removeFromCart, setToCart, clearCart } = cartSlice.actions;
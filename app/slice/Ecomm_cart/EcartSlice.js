import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EcommCarts: [
    
  ],
};

export const EcartSlice = createSlice({
  name: "EcommCarts",
  initialState,
  reducers: {
    addToCartProduct: (state, action) => {
      const existing = state.EcommCarts.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        // If product already exists, increase quantity
        existing.quantity += 1;
      } else {
        // Add new product with quantity = 1
        state.EcommCarts.push({
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.image,
          description: action.payload.description,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },
    IncreaseQuantity: (state, action) => {
      const product = state.EcommCarts.find(
        (item) => item.id === action.payload.id,
      );

      if (product) {
        product.quantity += 1
      }
    },
    DecreaseQuantity: (state, action) => {
      const product = state.EcommCarts.find(
        (item) => item.id === action.payload.id,
      );

      if (product) {
        if (product.quantity > 0) {
          product.quantity -= 1;
        }
      }
    },
    RemoveFromCart : (state, action) => {
        console.log('del');
        
        state.EcommCarts = state.EcommCarts.filter((product) => product.id !== action.payload.id)
        console.log('deleted');
    }
  },
});

export const { addToCartProduct, IncreaseQuantity, DecreaseQuantity, RemoveFromCart } = EcartSlice.actions;
export default EcartSlice.reducer;

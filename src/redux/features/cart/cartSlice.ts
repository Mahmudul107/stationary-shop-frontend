import { RootState } from "@/redux/store";
import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartItem extends TProduct {
  orderQuantity: number;
}

interface CartState {
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
  address: string;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  address: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = state.items.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }
      state.items.push({ ...action.payload, orderQuantity: 1 });
    },

    incrementOrderQuantity: (state, action) => {
      const productToIncrement = state.items.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToDecrement = state.items.find(
        (product) => product._id === action.payload
      );

      if (productToDecrement && productToDecrement.orderQuantity > 1) {
        productToDecrement.orderQuantity -= 1;
        return;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload
      );
    },

    updateAddress: (state, action) => {
      state.address = action.payload;
    },

    clearCart: (state) => {
      state.items = [];
      state.address = "";
    },
  },
});

export const subTotalSelector = (state: RootState) => {
  return state.cart.items.reduce((acc, product) => {
    return acc + product.price * product.orderQuantity;
  }, 0);
};

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.items.map((product) => ({
      product: product._id,
      quantity: product.orderQuantity,
    })),
    address: `${state.cart.address}`,
    paymentMethod: "Online",
  };
};

export const orderedProductsSelector = (state: RootState) => {
  return state.cart.items;
};
export const addressSelector = (state: RootState) => {
  return state.cart.address;
};

export const {
  addToCart,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeFromCart,
  updateAddress,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
  id: number;
  name: string;
  photo: string;
  price: number;
}

interface CartProducts extends Products {
  amount: number;
}

interface CartSliceState {
  products: CartProducts[];
}

const initialState: CartSliceState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, actions: PayloadAction<Products>) {
      const updatedCart = [...state.products];

      const productExists = updatedCart.find(
        (product) => product.id === actions.payload.id
      );

      if (productExists) {
        productExists.amount++;
      } else {
        const newProduct = {
          ...actions.payload,
          amount: 1,
        };

        updatedCart.push(newProduct);
      }

      state.products = updatedCart;
    },
    removeProduct(state, actions: PayloadAction<number>) {
      const updatedCart = [...state.products];

      const productExists = updatedCart.find(
        (product) => product.id === actions.payload
      );

      if (productExists && productExists?.amount > 1) {
        productExists.amount--;
      }

      state.products = updatedCart;
    },
    removeAllProductsItens(state, actions: PayloadAction<number>) {
      const updatedCart = [
        ...state.products.filter((product) => product.id !== actions.payload),
      ];

      state.products = updatedCart;
    },
  },
});

export const { addProduct, removeProduct, removeAllProductsItens } =
  cartSlice.actions;
export default cartSlice.reducer;

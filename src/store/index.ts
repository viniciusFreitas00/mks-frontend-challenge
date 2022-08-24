import { configureStore } from "@reduxjs/toolkit";

import sideBarReducer from "./cartSideBar/cartSideBarSlice";
import cartSliceReducer from "./cart/cartSlice";
import { apiSlice } from "./products/productsApiSlice";

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    cart: cartSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

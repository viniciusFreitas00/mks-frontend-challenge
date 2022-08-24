import { configureStore } from "@reduxjs/toolkit";

import sideBarReducer from "./cartSideBar/cartSideBarSlice";

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

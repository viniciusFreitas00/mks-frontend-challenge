import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SideBarSliceState {
  isVisible: boolean;
}

const initialState: SideBarSliceState = {
  isVisible: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    hideSideBar(state) {
      state.isVisible = false;
    },
    showSideBar(state) {
      state.isVisible = true;
    },
  },
});

export const { hideSideBar, showSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;

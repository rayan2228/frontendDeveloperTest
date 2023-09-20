import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userListSlice = createSlice({
  name: "userLists",
  initialState,
  reducers: {
    addUserList(state, actins) {
      state = [...actins.payload];
    },
  },
});
export const { addUserList } = userListSlice.actions;
export default userListSlice.reducer;

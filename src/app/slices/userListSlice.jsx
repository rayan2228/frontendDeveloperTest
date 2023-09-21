import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("userList"))
    ? JSON.parse(localStorage.getItem("userList"))
    : [],
};

export const userListSlice = createSlice({
  name: "userLists",
  initialState,
  reducers: {
    addUserList(state, action) {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});
export const { addUserList } = userListSlice.actions;
export default userListSlice.reducer;

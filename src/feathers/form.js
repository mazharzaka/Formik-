import {createSlice} from "@reduxjs/toolkit";

const form = createSlice({
  name: "form",
  initialState: {
    value: {},
    Auth: false,
  },
  reducers: {
    Add: (state, action) => {
      state.value = action.payload;
      state.Auth = true;
      console.log(state.Auth);
    },
    Out: (state) => {
      state.value = {};
      state.Auth = false;
      console.log(state.Auth);
    },
  },
});
export const {Add, Out} = form.actions;
export default form.reducer;

import {createSlice} from "@reduxjs/toolkit";

export const Couter = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state, action) => {
      state.value = state.value + 1;
    },
    decrease: (state, action) => {
      state.value = state.value - 1;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
});
export const {increase, decrease, reset} = Couter.actions;
export default Couter.reducer;

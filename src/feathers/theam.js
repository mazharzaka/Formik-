import {createSlice} from "@reduxjs/toolkit";

export const colorChange = createSlice({
  name: "Theam",
  initialState: {
    value: "",
  },
  reducers: {
    Change: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const {Change} = colorChange.actions;
export default colorChange.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action.payload);
      state.value += action.payload;
    },
    setUserId: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setUserId } =
  userSlice.actions;

export default userSlice.reducer;

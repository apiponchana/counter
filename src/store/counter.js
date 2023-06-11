import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "Counter",
  initialState: initialState,
  reducers: {
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    increment(state) {
      state.counter = state.counter + 1;
    },

    decrement(state) {
      state.counter = state.counter - 1;
    },

    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

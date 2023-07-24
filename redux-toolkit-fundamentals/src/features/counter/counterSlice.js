import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    value: 0,
}

// Create count slice
export const counterSlice = createSlice({
    // slice name to identify the slice
    name: "counter",
    initialState,

    // reducer is a function to update state
    reducers: {
        // increment and decrement are action
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },
    },
});

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;


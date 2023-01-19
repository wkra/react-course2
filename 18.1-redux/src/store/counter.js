import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    show: true
};
const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc(state, action) {
            state.counter = state.counter + action.payload;
        },
        dec(state) {
            state.counter--;
        },
        toggle(state) {
            state.show = !state.show;
        }
    }
});
export const counterActions = slice.actions;

export default slice.reducer
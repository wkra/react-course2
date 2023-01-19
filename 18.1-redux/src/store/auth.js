import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";

const initialState = {
    isAuthenticated: false
};
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = slice.actions;
export default slice.reducer
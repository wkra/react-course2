import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false
    },
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});
export const uiActions = slice.actions;

export default slice.reducer
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items || [];
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItem(state, action) {
            const item = action.payload;
            const stateItem = state.items.find(element => element.id === item.id);
            state.changed = true;

            if (stateItem) {
                stateItem.quantity += item.quantity;
                stateItem.totalPrice = stateItem.quantity * stateItem.price;
            } else {
                state.items.push({
                    id: item.id,
                    price: item.price,
                    quantity: item.quantity,
                    totalPrice: item.quantity * item.price,
                    name: item.name
                });
            }

            state.totalQuantity += item.quantity;

        },
        removeItem(state, action) {
            const id = action.payload;

            const stateItem = state.items.find(item => item.id === id);

            state.totalQuantity -= 1;
            state.changed = true;

            if (stateItem.quantity === 1) {
                state.items = state.items.filter(el => el.id !== id);
            } else {
                stateItem.quantity--;
                stateItem.totalPrice = stateItem.quantity * stateItem.price;
            }
        }
    }
});

export const cartActions = slice.actions;

export default slice.reducer;
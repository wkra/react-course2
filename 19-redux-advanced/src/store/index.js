import { configureStore } from '@reduxjs/toolkit';
import ui from './ui';
import cart from './cart';

const store = configureStore({
    reducer: {
        ui,
        cart
    }
});

export default store
import { uiActions } from "./ui";
import { cartActions } from "./cart";

const apiUrl = 'https://react-udemy-http-9e3b2-default-rtdb.europe-west1.firebasedatabase.app/cart.json';

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending',
            message: 'sending cart data'
        }));

        const sendRequest = async () => {
            const { changed, ...otherCartProps } = cart;
            const response = await fetch(apiUrl, {
                method: 'PUT',
                body: JSON.stringify(otherCartProps)
            });

            if (!response.ok) {
                throw new Error('something went wrong');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Something went wrong'
            }));
        }
    };
};

export const fetchData = () => {
    return async (dispatch) => {
        const fetchCart = async () => {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('something went wrong');
            }

            return await response.json();
        };

        try {
            const data = await fetchCart();

            dispatch(cartActions.replaceCart(data));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Something went wrong'
            }));
        }
    };
};
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { uiActions } from "./store/ui";
import Notification from "./components/UI/Notification";

const apiUrl = 'https://react-udemy-http-9e3b2-default-rtdb.europe-west1.firebasedatabase.app/cart.json';
let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const cartIsVisible = useSelector((state) => {
        return state.ui.cartIsVisible;
    });

    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'sending',
                message: 'sending cart data'
            }));
            const response = await fetch(apiUrl, {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('something went wrong');
            }

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
            const responseJSON = await response.json();
        };

        if (isInitial) {
            isInitial = false;
            return;
        }
        sendCartData().catch(error => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Something went wrong'
            }));
        });

    }, [cart, dispatch]);

    return (
        <>
            {notification &&
                (<Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}/>)}
            <Layout>
                {cartIsVisible && <Cart/>}
                <Products/>
            </Layout>
        </>
    );
}

export default App;

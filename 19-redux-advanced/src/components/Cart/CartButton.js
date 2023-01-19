import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    const cartTotalQuantity = useSelector(state => {
        return state.cart.totalQuantity;
    });

    return (
        <button className={classes.button}
                onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartTotalQuantity}</span>
        </button>
    );
};

export default CartButton;

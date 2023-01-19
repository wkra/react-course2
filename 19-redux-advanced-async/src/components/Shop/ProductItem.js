import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  const { name, price, description, id } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItem({
        id,
        price,
        name,
        quantity: 1
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

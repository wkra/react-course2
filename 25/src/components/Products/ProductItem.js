import React, { useContext } from 'react';

import Card from '../UI/Card';
import './ProductItem.css';
import { ProductsContext } from '../../context/products-context';
import { useStore } from '../../hooks-store/store';

// React memo is optimisation to render only item which has changed
const ProductItem = React.memo((props) => {
  // option 1 - context
  // const toggleFav = useContext(ProductsContext).toggleFav;

  //option 2 - hook
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // option 1
    // toggleFav(props.id)

    //option 2
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;

import React, { useContext } from 'react';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import { ProductsContext } from '../context/products-context';
import { useStore } from '../hooks-store/store';

const Favorites = () => {
  // option 1 - context
  // const products = useContext(ProductsContext).products;

  //option 2 - hook
  const state = useStore()[0];

  // option 1
  // const favoriteProducts = products.filter(p => p.isFavorite);

  // option 2
  const favoriteProducts = state.products.filter(p => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;

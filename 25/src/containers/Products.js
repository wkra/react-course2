import React, { useContext } from 'react';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';
// import { ProductsContext } from '../context/products-context';
import { useStore } from '../hooks-store/store';

const Products = () => {
  // option 1 - context
  // const productList = useContext(ProductsContext).products;

  // option 2 - hook
  const state = useStore()[0];

  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

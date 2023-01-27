import React, { useState } from 'react';

const products = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false
  }
];

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {}
});

export default function ProductProvider(props) {
  const [productsList, setProductsList] = useState(products);

  const toggleFavourite = productId => {
    setProductsList(currentProdList => {
      const prodIndex = currentProdList.findIndex(
        p => p.id === productId
      );
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavourite }}>
      {props.children}
    </ProductsContext.Provider>
  );
}


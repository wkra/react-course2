import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks-store/products-store';

/// option 1 - context
// import ProductProvider from './context/products-context'

// ReactDOM.render(
//   <ProductProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProductProvider>,
//   document.getElementById('root')
// );

configureProductsStore(); // option 2 - hook
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

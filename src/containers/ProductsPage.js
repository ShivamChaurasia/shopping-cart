import React from 'react'
import FilterContainer from './FilterContainer';
import ProductsContainer from './ProductsContainer';

const ProductsPage = (props) => (
  <div className="product-page-wrapper">
    <FilterContainer />
    <ProductsContainer {...props}/>
  </div> 
)

export default ProductsPage;

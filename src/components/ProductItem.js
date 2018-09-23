import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Card, Col } from 'antd';

const ProductItem = ({ product, onProductClick, onAddToCartClicked }) => (
  <Col sm={24} md={12} lg={8}>
    <Card
      hoverable
      style={{ margin: 10 }}
      cover={<img alt="product" src={product.img} onClick={() => {onProductClick(product)}} />}
    >
      <Product
        title={product.title}
        category={product.category}
        price={product.price}
        isExclusive={product.isExclusive}
        onAddToCartClicked={onAddToCartClicked}
      />
    </Card>
  </Col>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem

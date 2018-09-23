import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd';

const Product = ({ title, category, price, isExclusive, onAddToCartClicked }) => (
  <div>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <div className="product-title">
          {title}
        </div>
        <div className="product-category">
          {category}
        </div>
        <div>
          ${price}
        </div>
      </div>
      <div>
        <div className="custom-button"
          onClick={onAddToCartClicked}
        >
          Add to cart
        </div>
      </div>
    </div>
    <div>{isExclusive && <Tag color="magenta">Exclusive</Tag>}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.string,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product

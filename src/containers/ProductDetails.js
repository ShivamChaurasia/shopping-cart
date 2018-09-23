import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { notify } from 'react-notify-toast';
import { Breadcrumb, Row, Col, Card } from 'antd';
import { addToCart } from '../actions';
import Loader from '../components/Loader';
import Product from '../components/Product';
import { getProduct } from '../reducers/products';

const ProductDetails = ({ item, addToCart }) => (
  <div className="product-detail-page">
    {!item ? <Loader /> :
      <div>
        <div>
          <Breadcrumb style={{ margin: 10 }}>
            <Breadcrumb.Item href="">
              <NavLink to="/" title="Products">
                All Products
              </NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <span>{item.title}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row>
          <Col lg={12} sm={24}>
            <Card
              hoverable
              style={{ margin: 10 }}
              cover={<img alt="item" src={item.img} />}
            />
          </Col>
          <Col lg={4} />
          <Col lg={8} sm={24} style={{ marginTop: 10 }}>
            <Product
              title={item.title}
              category={item.category}
              price={item.price}
              isExclusive={item.isExclusive}
              onAddToCartClicked={() => {
                notify.show('Added to cart.', "success")
                addToCart(item.id)
              }}
            />
          </Col>
        </Row>
      </div>
    }
  </div>
)

ProductDetails.propTypes = {
  item: PropTypes.object,
}

const mapStateToProps = (state, { match }) => ({
  item: getProduct(state.products, match.params.id)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductDetails)

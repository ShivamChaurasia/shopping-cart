import React from 'react';
import PropTypes from 'prop-types';
import { Table, Select } from 'antd';
import CartEmpty from './CartEmpty';
import { NavLink } from 'react-router-dom';

const Option = Select.Option;

class Cart extends React.Component {

  getColumns = () => {
    return [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, row) => <NavLink to={`/product/${row.id}`} title={text}>{text}</NavLink>,
    }, {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }, {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, row) => (
        <Select
          defaultValue={text}
          style={{ width: 120 }}
          onChange={ quantity => this.props.updateQuantity(row.id, quantity)}
        >
          {Array.from(Array(10).keys()).map(i => <Option key={i} value={i+1}>{i+1}</Option>)}
        </Select>
      )
    }, {
      title: 'Total',
      dataIndex: 'quantity',
      key: 'net',
      render: (text, row) => <span>{(text * row.price).toFixed(2)}</span>
    }, {
      title: 'Action',
      key: 'action',
      dataIndex: 'id',
      render: (id) => (
        <span onClick={()=>this.props.removeFromCart(id)}>
          Delete
        </span>
      ),
    }];
  }

  render() {
    const { products, total, onCheckoutClicked } = this.props;
    const hasProducts = products.length > 0
    if (!hasProducts) {
      return <CartEmpty />
    }
    const columns = this.getColumns();
    
    return (
      <div>
        <h3>Your Cart</h3>
        <div><Table columns={columns} dataSource={products} rowKey="id"/></div>
        <p>Total: &#36;{total}</p>
        <button onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart

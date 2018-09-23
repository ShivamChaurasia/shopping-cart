import React from 'react'
import { Icon } from 'antd'
import { NavLink } from "react-router-dom";

const CartEmpty  = () => {
  return (
    <div className="cart-empty">
      <Icon type="shopping" theme="outlined" />
      <div className="err">Your Shopping Bag is empty</div>
      <NavLink to="/">Add items to cart.</NavLink>
    </div>
  )
}

export default CartEmpty

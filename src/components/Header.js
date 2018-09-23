import React from 'react'
import { Icon, Menu, Layout, Badge } from 'antd'
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router'

const Header = ({ itemsInCart, location }) => {
  return (
    <Layout.Header >
      <div className="centralize">
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <NavLink activeClassName="selected" to="/" title="Products">
              <Icon type="skin" theme="outlined" /> Products
          </NavLink>
          </Menu.Item>
          <Menu.Item key="/cart">
            <NavLink activeClassName="selected" to="/cart" title="Cart">
              <Badge style={{ backgroundColor: '#52c41a', right: -15 }} count={itemsInCart}>
                <Icon type="shopping-cart" theme="outlined" /> Cart
              </Badge>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  )
}

export default withRouter(Header)

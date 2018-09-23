import React from 'react'
import { Spin } from 'antd'

const Loader = ({ itemsInCart, location }) => {
  return (
    <div className="spinner-container">
      <Spin />
    </div>
  )
}

export default Loader

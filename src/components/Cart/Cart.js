import React from 'react'
import classes from './Cart.module.css'
import CartProductCard from './CartProductCard/CartProductCard';

const Cart = () => {
  return (
    <div className={classes.container}>
      <span className={classes.heading}>Shopping Cart</span>
      <span className={classes.itemQty}>{}Items</span>
      <CartProductCard />
      <hr style={{margin: "15px 0"}}/>
    </div>
  )
}

export default Cart
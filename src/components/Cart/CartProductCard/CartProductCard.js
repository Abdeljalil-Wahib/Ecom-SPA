import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartProductCard.module.css'
import { cartActions } from '../../../store/cart-slice';
import {IoTrashBinOutline} from 'react-icons/io5'


const CartProductCard = ({product}) => {
  const dispatch = useDispatch()
  const inputHandler = (event) => {
    setItemQuantity(event.target.value);
  }
 

  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>
        <img className={classes.pdctImg} src={product.image} alt="" />
      </div>
      <div className={classes.pdctInfo}>
        <div className={classes.df}>
          <span>{product.title}</span>
          <span onClick= {() => dispatch(cartActions.removeProduct((product)))} className={classes.binIcon}>
            <IoTrashBinOutline />
          </span>
        </div>
        <span>S/{product.colorChosen}</span>
        <span>${product.price.toFixed(2) * product.quantity}</span>
      <div className={classes.itemsQuantity}>
        <button onClick={() => dispatch(cartActions.decreaseProductQty(product))}  className={classes.decreaseQtty}>-</button>
        <input onChange={inputHandler} value={product.quantity} className={classes.input} type="number" />
        <button onClick={() => dispatch(cartActions.addProduct(product))} className={classes.increaseQtty}>+</button>
      </div>
      </div>
    </div>
  )
}

export default CartProductCard
import React, { useState } from 'react'
import classes from './CartProductCard.module.css'
import pdct1 from '../../../assets/image-product-1.jpg'

const CartProductCard = () => {
  const [itemQuantity, setItemQuantity] = useState(1)
  const inputHandler = (event) => {
    setItemQuantity(event.target.value);
    console.log(event.target.value)
  }
  const increaseQttyHandler = () => {
    setItemQuantity(prev => +prev + 1)
  }
  const decreaseQttyHandler = () => {
    if (itemQuantity > 1) {
      setItemQuantity(prev => +prev - 1)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>
        <img className={classes.pdctImg} src={pdct1.src} alt="" />
      </div>
      <div className={classes.pdctInfo}>
        <span>Product 10 Sample - Clothes And Accessories For Sale</span>
        <span>S/Color</span>
        <span>${69.420.toFixed(2)}</span>
      <div className={classes.itemsQuantity}>
        <button onClick={decreaseQttyHandler} className={classes.decreaseQtty}>-</button>
        <input onChange={inputHandler} value={itemQuantity} className={classes.input} type="number" />
        <button onClick={increaseQttyHandler} className={classes.increaseQtty}>+</button>
      </div>
      </div>
    </div>
  )
}

export default CartProductCard
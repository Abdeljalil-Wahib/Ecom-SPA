import React, { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../store/cart-slice'
import classes from './CartProductCard.module.css'
import { IoTrashBinOutline } from 'react-icons/io5'

const CartProductCard = ({product}) => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const [input, setInput] = useState(product.quantity)

	const inputHandler = (e) => {
		setInput(e.target.value)
	}
	
	return (
		<div className = {classes.container}>
				<div className = {classes.imagewrapper}>
					<img className = {classes.image} src = {product?.image} alt = 'product'/>
				</div>
				<div className = {classes.detailswrapper}>
					<div className={classes.producttitlewrapper}>
						<h2 className = {classes.producttitle}>{product?.title}</h2>
						<IoTrashBinOutline onClick={() => dispatch(cartActions.removeProd(product))} style = {{cursor: 'pointer'}}/>
					</div>
					<div className = {classes['size-color-editbtn']}>
						<span className = {classes['size-color']}>S / 
						{product?.chosenColor}
						</span>
						<span className = {classes['editbtn']}>
							<BiEdit className = {classes.editicon}/>
						</span>
					</div>
					<span>${product?.price}</span>
					<div className = {classes.qty}>
						<button className = {classes.decqty} onClick = {() => dispatch(cartActions.removeOneProd(product))}>-</button>
						<input type = "text" className = {classes.input} value = {product.quantity} onChange = {inputHandler}/>
						<button className = {classes.incqty} onClick = {() => dispatch(cartActions.addToCart(product))}>+</button>
					</div>
				</div>
		</div>
	)
}

export default CartProductCard
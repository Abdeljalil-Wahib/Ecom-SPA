import React, { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import classes from './CartProductCard.module.css'

const CartProductCard = ({product}) => {
	const [input, setInput] = useState(product.quantity)

	const inputHandler = (e) => {
		setInput(e.target.value)
	}

	const decQtyHandler = () => {
		if (input > 1)
			setInput(prev => +prev - 1)
	}

	const incQtyHandler = () => {
			setInput(prev => +prev + 1)
	}
	
	return (
		<div className = {classes.container}>
				<div className = {classes.imagewrapper}>
					<img className = {classes.image} src = {product?.image} alt = 'product'/>
				</div>
				<div className = {classes.detailswrapper}>
					<h2 className = {classes.producttitle}>{product?.title}</h2>
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
						<button className = {classes.decqty} onClick = {decQtyHandler}>-</button>
						<input type = "text" className = {classes.input} value = {input} onChange = {inputHandler}/>
						<button className = {classes.incqty} onClick = {incQtyHandler}>+</button>
					</div>
				</div>
		</div>
	)
}

export default CartProductCard
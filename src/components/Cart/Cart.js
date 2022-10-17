import React, { useEffect, useState } from 'react'
import { uiActions } from '../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Cart.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import CartProductCard from './CartProductCard/CartProductCard'

const Cart = (props) => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	
	const toggleCartHandler = () => {
		dispatch(uiActions.toggle())
	}
	
	return (
		<div className = {classes.container}>
			<Backdrop/>
			<div className = {classes.cartcontainer}>
				<div className = {classes.header}>
					<h3>Shopping Cart</h3>
					<span style = {{padding: '10px', cursor: 'pointer'}} onClick = {toggleCartHandler}>X</span>
				</div>
				<ul className = {classes.productslist}>
					{products?.map((product) => <CartProductCard key = {product.id} product = {product}/>)}
				</ul>
			</div>
		</div>
	)
}

export default Cart
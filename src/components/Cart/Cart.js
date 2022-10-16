import React, { useEffect, useState } from 'react'
import { uiActions } from '../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Cart.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import CartProductCard from './CartProductCard/CartProductCard'
import axios from 'axios'

const Cart = (props) => {
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart.products.payload)
	const [Product, setProduct] = useState()
	
	const toggleCartHandler = () => {
		dispatch(uiActions.toggle())
	}
	// useEffect(() => {
	// 	axios.get('https://fakestoreapi.com/products/1')
	// 	.then(res => setProduct(res.data))
	// 	.catch(err => console.log(err))
	// }, [])
	
	return (
		<div className = {classes.container}>
			<Backdrop/>
			<div className = {classes.cartcontainer}>
				<div className = {classes.header}>
					<h3>Shopping Cart</h3>
					<span style = {{padding: '10px', cursor: 'pointer'}} onClick = {toggleCartHandler}>X</span>
				</div>
				<CartProductCard product = {cart}/>
			</div>
		</div>
	)
}

export default Cart
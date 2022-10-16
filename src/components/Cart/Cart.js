import React, { useEffect, useState } from 'react'
import classes from './Cart.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import CartProductCard from './CartProductCard/CartProductCard'
import axios from 'axios'

const Cart = (props) => {
	const [Product, setProduct] = useState()
	useEffect(() => {
		axios.get('https://fakestoreapi.com/products/1')
		.then(res => setProduct(res.data))
		.catch(err => console.log(err))
	}, [])
	
	return (
		<div className = {classes.container}>
			<Backdrop cartClicked = {props.cartClicked}/>
			<div className = {classes.cartcontainer}>
				<div className = {classes.header}>
					<h3>Shopping Cart</h3>
					<span style = {{padding: '10px', cursor: 'pointer'}} onClick = {props.cartClicked}>X</span>
				</div>
				<CartProductCard product = {Product}/>
			</div>
		</div>
	)
}

export default Cart
import React from 'react'
import classes from './Cart.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'

const Cart = (props) => {
	return (
		<div className = {classes.container}>
			<Backdrop cartClicked = {props.cartClicked}/>
			<div className = {classes.cartcontainer}>test</div>
		</div>
	)
}

export default Cart
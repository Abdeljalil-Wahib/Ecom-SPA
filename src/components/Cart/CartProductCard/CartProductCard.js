import React from 'react'
import {BiEdit} from 'react-icons/bi'
import classes from './CartProductCard.module.css'

const CartProductCard = ({product}) => {
	return (
		<div className = {classes.container}>
				<div className = {classes.imagewrapper}>
					<img className = {classes.image} src = {product?.image} alt = 'product'/>
				</div>
				<div className = {classes.detailswrapper}>
					<h2 className = {classes.producttitle}>{product?.title}</h2>
					<div className = {classes['size-color-editbtn']}>
						<span className = {classes['size-color']}>S / color</span>
						<span className = {classes['editbtn']}>
							<BiEdit className = {classes.editicon}/>
						</span>
					</div>
				</div>
		</div>
	)
}

export default CartProductCard
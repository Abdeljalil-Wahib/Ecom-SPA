/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import ColorsFilters from '../UI/ColorsFilters/ColorsFilters'
import Rating from '../UI/Rating/Rating'
import classes from './ProductCardFull.module.css'
import {IoIosHeartEmpty} from 'react-icons/io'
import Button from '../UI/Button/Button'
import { uiActions } from '../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const DUMMY_COLORS = [
	{
		id: 0,
		color: 'orange',
		quantity: 5
	},
	{
		id: 1,
		color: 'black',
		quantity: 5
	}
]

const ProductsCardFull = ({item}) => {
	const dispatch = useDispatch();
	const cartProducts = useSelector(state => state.cart.products)
	const [chosenColorId, setChosenColor] = useState()

	const addToCartHandler = () => {
		const chosenColor = DUMMY_COLORS.find(color => color.id === chosenColorId)?.color
		let chosenItem = {...item, chosenColor}
		dispatch(cartActions.addToCart(chosenItem))
		dispatch(uiActions.toggle())
	}

	return (
		<div className = {classes.container} >
			<div className = {classes.imagewrapper}>
				<img
					className = {classes.productimage}
					src = {item.image}
					alt = 'product'
				/>
				<Button href = {''} type = 'button' onClick = {() => addToCartHandler(item)} body = 'Add To Cart' className = {classes.addtocart}/>
			</div>
			<div className = {classes.productdetails}>
				<div className = {classes['brand-fav']}>
					<h3 className = {classes.brand}>{item.brand ? item.brand : 'Brand'}</h3>
					<span className = {classes.fav}><IoIosHeartEmpty style = {{width: '18px', height: '18px'}}/></span>
				</div>
				<ColorsFilters setColors = {setChosenColor} colors = {DUMMY_COLORS}/>
				<h2 className = {classes.itemtitle}>{item.title}</h2>
				<span className = {classes.price}>${item.price.toFixed(2)}</span>
				<Rating rating = {item.rating}/>
			</div>
		</div>
	)
}

export default ProductsCardFull
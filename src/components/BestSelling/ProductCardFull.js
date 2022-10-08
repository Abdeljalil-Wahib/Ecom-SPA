/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ColorsFilters from '../UI/ColorsFilters/ColorsFilters'
import Rating from '../UI/Rating/Rating'
import classes from './ProductCardFull.module.css'
import {IoIosHeartEmpty} from 'react-icons/io'

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
	return (
		<div className = {classes.container}>
			<img
				className = {classes.productimage}
				src = {item.image}
				alt = 'product'
			/>
			<div className = {classes.productdetails}>
				<div className = {classes['brand-fav']}>
					<h3 className = {classes.brand}>{item.brand ? item.brand : 'Brand'}</h3>
					<span className = {classes.fav}><IoIosHeartEmpty style = {{width: '18px', height: '18px'}}/></span>
				</div>
				<ColorsFilters colors = {DUMMY_COLORS}/>
				<h2 className = {classes.itemtitle}>{item.title}</h2>
				<span className = {classes.price}>${item.price.toFixed(2)}</span>
				<Rating rating = {item.rating}/>
			</div>
		</div>
	)
}

export default ProductsCardFull
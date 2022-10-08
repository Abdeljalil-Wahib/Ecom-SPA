/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './BestSelling.module.css'
import Link from 'next/link'
import ProductCardFull from './ProductCardFull'

const BestSelling = () => {
	const [products, setProducts] = useState()

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products?limit=4')
		.then(res => {
			console.log(res.data[0])
			setProducts(res.data)
		})
		.catch(err => console.log(err))
	}, [])
	
	return (
		<div className = {classes.container}>
			<div className = {classes.titlewrapper}>
				<h1 className = {classes.h1}>Best Selling</h1>
				<Link href = '/collections'>
					<a className = {classes.viewall}>VIEW ALL</a>
				</Link>
			</div>
			<div className = {classes.carousel}>
				{products?.map((item) => {
						return (
							<ProductCardFull key = {item.id} item = {item}/>
							)}
						)}
			</div>
		</div>
	)
}

export default BestSelling
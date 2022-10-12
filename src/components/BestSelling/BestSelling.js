/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './BestSelling.module.css'
import Link from 'next/link'
import ProductCardFull from './ProductCardFull'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


const BestSelling = () => {
	const [products, setProducts] = useState()
	const [translate, setTranslate] = useState(0)

	const prevSlide = (e) => {
		if (translate < 0) {
			setTranslate(prev => prev + 25)
		}
	}

	const nextSlide = () => {
		if (translate > -25 * (products.length - 4)) {
			setTranslate(prev => prev - 25)
		}
	}

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products?limit=10')
		.then(res => {
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
				<button name = 'disable' onClick = {prevSlide} className = {classes.navbtn + ' ' + classes.leftbtn} >
					<AiOutlineLeft  style = {{width: '40px', height: '40px'}}/>
				</button>
				<div className = {classes.productswrapper}
					style = {{transform: `translateX(${translate}%)`}}>
					{products?.map((item) => {
						return (
							<ProductCardFull key = {item.id} item = {item}/>
							)}
					)}
				</div>
				<button className = {classes.navbtn + ' ' + classes.rightbtn}>
					<AiOutlineRight onClick = {nextSlide} style = {{width: '40px', height: '40px'}}/>
				</button>
			</div>
		</div>
	)
}

export default BestSelling
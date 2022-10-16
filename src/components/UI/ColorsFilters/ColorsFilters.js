import React, { useEffect, useState } from 'react'
import classes from './ColorsFilters.module.css'

const ColorsFilters = ({setAddedProduct, colors}) => {
	const [current, setCurrent] = useState()
	const [colorpopup, setColorPopup] = useState()

	const colorHandler = (color) => {
		setCurrent(color.id)
		setAddedProduct(prev => ({
			...prev,
			colorPicked: color
		}))
	}

	const popupHandler = (id) => {
		setColorPopup(id)
	}

	// useEffect(() => {
	// 	return setColorPopup(false)
	// }, [colorpopup])

	return (
		<div className = {classes.colorswrapper}>
			{colors?.map((color, idx) => <div
				key = {color.id}
				//the id comparison is wrong
				style = {{background: color.color, outlineColor: current === idx ? 'black' : 'lightgrey'}}
				onClick = {() => colorHandler(color)}
				onMouseOver = {() => popupHandler(idx)}
				onMouseLeave = {() => popupHandler()}
				className = {classes.colorwrapper}>
				{colorpopup === idx && <span style = {{position: 'absolute', background: 'black', color: 'white', bottom: '35px', left: '5px'}}>{color.color}</span>}
				</div>)}
		</div>
	)
}

export default ColorsFilters
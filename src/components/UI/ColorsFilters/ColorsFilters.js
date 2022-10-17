import React, { useEffect, useState } from 'react'
import classes from './ColorsFilters.module.css'

const ColorsFilters = ({setColors, colors}) => {
	const [current, setCurrent] = useState()
	const [colorpopup, setColorPopup] = useState()

	const colorHandler = (id, idx) => {
		setCurrent(idx)
		setColors(id)
	}

	const popupHandler = (id) => {
		setColorPopup(id)
	}

	useEffect(() => {
		setColors(0)
	}, [])

	return (
		<div className = {classes.colorswrapper}>
			{colors?.map((color, idx) => <div
				key = {color.id}
				style = {{background: color.color, outlineColor: current === idx ? 'black' : 'lightgrey'}}
				onClick = {() => colorHandler(color.id, idx)}
				onMouseOver = {() => popupHandler(idx)}
				onMouseLeave = {() => popupHandler()}
				className = {classes.colorwrapper}>
				{colorpopup === idx && <span style = {{position: 'absolute', background: 'black', color: 'white', bottom: '35px', left: '5px'}}>{color.color}</span>}
				</div>)}
		</div>
	)
}

export default ColorsFilters
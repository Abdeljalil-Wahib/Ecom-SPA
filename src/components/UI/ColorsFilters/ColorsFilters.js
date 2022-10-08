import React, { useState } from 'react'
import classes from './ColorsFilters.module.css'

const ColorsFilters = ({colors}) => {
	const [current, setCurrent] = useState()

	const colorHandler = (id) => {
		setCurrent(id)
	}

	return (
		<div className = {classes.colorswrapper}>
			{colors?.map((color, idx) => <div
				key = {color.id}
				style = {{background: color.color, outlineColor: current === idx ? 'black' : 'lightgrey'}}
				onClick = {() => colorHandler(idx)}
				className = {classes.colorwrapper}/
				>)}
		</div>
	)
}

export default ColorsFilters
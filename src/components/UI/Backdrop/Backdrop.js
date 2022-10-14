import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
	return (
		<div className = {classes.container} onClick = {props.cartClicked}></div>
	)
}

export default Backdrop
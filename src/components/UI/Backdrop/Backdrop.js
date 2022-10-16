import React from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
	const dispatch = useDispatch()

	const toggleCartHandler = () => {
		dispatch(uiActions.toggle())
	}
	return (
		<div className = {classes.container} onClick = {toggleCartHandler}></div>
	)
}

export default Backdrop
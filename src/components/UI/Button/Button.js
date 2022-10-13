import React from 'react'
import classes from './Button.module.css'

const Button = (props, ref) => {
	return (
		<>
		{props.type === 'button' ? <props.type onClick = {props.action} className = {classes.button + ' ' + props.className}>{props.body}</props.type> :
		<props.type href = {props.href} className = {classes.button + ' ' + props.className} ref = {ref}>{props.body}</props.type>}
		</>
	)
}

export default React.forwardRef(Button)
import React from 'react'
import classes from './Button.module.css'

const Button = (props, ref) => {
	const linkprops = {
		href: props.href,
		ref: ref
	}
	const buttonprops = {
		onClick: props.onClick,
	}
	const customprops = {
		className: classes.button + ' ' + props.className,
		children: props.body,
		...props.type === 'button' ? {...buttonprops} :
		props.type === 'a' ? {...linkprops} : {}
	}

	return (
		<props.type {...customprops} />
	)
}

export default React.forwardRef(Button)
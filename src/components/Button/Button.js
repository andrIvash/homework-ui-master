import React from 'react';

import classes from './button.module.css';

export const Button = props => {
	return (
		<button type='button' className={`${classes.Button} ${classes[props.class]}`} onClick={props.clickHandler}>
			{props.children}
		</button>
	)
};

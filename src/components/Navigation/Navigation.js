import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navigation.module.css';

const oddEvent = (props, year) => {
	return props.activeYear === year
};

export const Navigations = props => {
	const links = props.years.map( year =>
		<li key={year} className={year <= props.activeYear ? `${classes.LinksList__elem} ${classes.LinksList__elem_underlined}`
			: classes.LinksList__elem}>
			<NavLink
				to={`/?paused=true&year=${year}`}
				isActive={() => oddEvent(props, year)}
				className={classes.LinksList__link}
				activeClassName={`${classes.LinksList__link} ${classes.LinksList__link_active}`}
			>{year}</NavLink>
		</li>
	);
	return (
		<ul className={classes.LinksList}>
			{links}
		</ul>
	)
};

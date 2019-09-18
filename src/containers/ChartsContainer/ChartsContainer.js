import React, { Component } from 'react';

import data from '../../wild-pig-data';
import classes from './chartsContainer.module.css';


export class ChartsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className={classes.ChartsContainer}>
				<header className={classes.ChartsContainer__header}>
					<h1 className={classes.ChartsContainer__title}>
						Hawaiian Pig Visualization
					</h1>
				</header>
				<main className={classes.ChartsContainer__content}>

				</main>
				<footer className={classes.ChartsContainer__footer}>
					&copy; 2019 Test
				</footer>
			</div>
		)
	}
}

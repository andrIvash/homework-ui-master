import React, { Component } from 'react';

import { Timer } from '../../hocs/Timer/Timer';
import { Chart } from '../../components/Chart/Chart';
import { Navigations } from '../../components/Navigation/Navigation';
import { Button } from '../../components/Button/Button';

import { constants } from '../../helpers/constants';
import { parseYearsList } from '../../helpers/parseYearsList';
import { parseChartData } from '../../helpers/parseChartData';
import { getUrlParams } from '../../helpers/getUrlParams';

import data from '../../wild-pig-data';
import classes from './chartsContainer.module.css';

const parsedYears =  parseYearsList(data);
const parsedChartData = parseChartData(data);

export class ChartsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paused: true,
			year: 0,
			years: parsedYears
		}
	}

	componentDidMount() {
		const {location} = this.props;
		if (location) {
			const params = getUrlParams(location);
			this.setChartQuery(params);

		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.location !== prevProps.location) {
			this.setChartQuery(getUrlParams(this.props.location));
		}
	}

	setChartQuery = params => {
		const { paused, year } = params;
		if (typeof paused === "boolean" || year) {
			const yearIndex = this.state.years.indexOf(+year);
			const currentYear = yearIndex !== -1 ? yearIndex : 0;
			this.setState({
				paused: paused == 'true',
				year: currentYear
			})
		}
	};

	incrementYear = year => {
		this.setState({
			year
		});
	};

	startHandler = () => {
		this.setState({
			paused: false
		})
	};

	stopHandler = () => {
		this.setState({
			paused: true
		})
	};

	render() {
		const { paused, years, year} = this.state;
		return (
			<div className={classes.ChartsContainer}>
				<header className={classes.ChartsContainer__header}>
					<h1 className={classes.ChartsContainer__title}>
						Hawaiian Pig Visualization
					</h1>
				</header>
				<main className={classes.ChartsContainer__content}>
					<Timer
						paused={paused}
						increment={this.incrementYear}
						interval={constants.TIMER_INTERVAL}
						years={years}
						activeYear={year}
					>
						<Navigations activeYear={years[year]} years={years}/>
						<Chart activeYear={years[year]} data={parsedChartData} />
					</Timer>
					<Button class={'start'} clickHandler={this.startHandler}>start</Button>
					<Button class={'stop'} clickHandler={this.stopHandler}>stop</Button>
				</main>
				<footer className={classes.ChartsContainer__footer}>
					&copy; 2019 Test
				</footer>
			</div>
		)
	}
}

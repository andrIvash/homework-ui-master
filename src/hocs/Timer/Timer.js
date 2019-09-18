import React, { Component } from 'react';

export class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: 0
		};
	}

	componentDidMount() {
		const { paused } = this.props;

		if (!paused) {
			this.start();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.paused !== this.props.paused) {
			return true;
		}

		if (nextState.start !== this.state.start) {
			return true;
		}

		if (nextProps.activeYear !== this.props.activeYear) {
			return true;
		}
		return false;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.paused !== this.props.paused) {
			if (this.props.paused) {
				this.pause();
			} else {
				this.start();
			}
		}

		if (prevState.start !== this.state.start) {
			this.incrementIndex()
		}
	}

	start = () => {
		this.timer = setInterval(() => {
			this.setState({
				start: Date.now()
			});
		}, 2000);
	};

	pause = () => {
		clearInterval(this.timer);
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	};

	incrementIndex = () => {
		this.props.increment(this.props.activeYear < this.props.years.length - 1 ? this.props.activeYear + 1 : 0);
	};

	render() {
		return this.props.children
	}
}

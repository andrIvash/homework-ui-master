import React from 'react';
import {Bar} from 'react-chartjs-2';

export const Chart = props => {
	return (
		<div>
			<h2>{props.activeYear} year</h2>
			<Bar
				data={{
					labels: props.data[props.activeYear].labels,
					datasets: [
						{
							label: 'populations',
							backgroundColor: 'rgba(255,99,132,0.2)',
							borderColor: 'rgba(255,99,132,1)',
							borderWidth: 1,
							hoverBackgroundColor: 'rgba(255,99,132,0.4)',
							hoverBorderColor: 'rgba(255,99,132,1)',
							data: props.data[props.activeYear].data
						}
					]
				}}
				width={100}
				height={400}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [{
							stacked: false,
							gridLines: { display: false },
							ticks: {
								fontFamily: "Nunito Sans",
								beginAtZero:true,
								min: 0,
								stepSize: 500
							}
						}]
					}
				}}
			/>
		</div>
	);
};

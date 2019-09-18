export const parseChartData = data => data["PIG POPULATIONS"].reduce((res, elem) => {
	if (!res.hasOwnProperty(elem.year)) {
		res[elem.year] = {
			labels: [],
			data: []
		};
		res[elem.year].labels.push(elem.island);
		res[elem.year].data.push(elem.pigPopulation)
	}
	res[elem.year].labels.push(elem.island);
	res[elem.year].data.push(elem.pigPopulation);
	return res;
}, {});

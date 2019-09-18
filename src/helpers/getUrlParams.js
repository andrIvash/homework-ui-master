export const getUrlParams = location => {
	const searchParams = new URLSearchParams(location.search);
	return {
		paused: searchParams.get('paused') || '',
		year: searchParams.get('year') || ''
	};
}

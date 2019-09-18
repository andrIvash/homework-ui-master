import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {ChartsContainer} from './containers/ChartsContainer/ChartsContainer';

function App() {
	return (
		<Router>
			<Route path="/" component={ChartsContainer} />
		</Router>
	);
}

export default App;

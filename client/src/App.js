import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import routes from 'src/routes';

const App = () => {
	return (
		<Router>
			<div className="wrapper" id="req_app">
				<Sidebar />

				{/* Routes */}
				{routes.map(route => route)}
			</div>
		</Router>
	);
};

export default App;

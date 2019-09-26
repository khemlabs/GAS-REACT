import React from 'react';
import { Route } from 'react-router-dom';

import Requests from 'screens/Requests';
import ApprovedRequests from 'screens/ApprovedRequests';
import NewRequest from 'screens/NewRequest';
import RequestDetails from 'screens/RequestDetails';

const routes = [
	<Route key="route-home" path="/" exact component={Requests} />,
	<Route key="route-approved" path="/approved" component={ApprovedRequests} />,
	<Route key="route-new" path="/new" component={NewRequest} />,
	<Route key="route-details" path="/detail/:id" component={RequestDetails} />
];

export default routes;

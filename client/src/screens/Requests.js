import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackEndWrapper from 'services/BackEndWrapper';

const Requests = () => {
	const bw = new BackEndWrapper();

	const [requests, setRequests] = useState([]);

	useEffect(() => {
		loadRequests();
	}, []);

	const loadRequests = async () => {
		try {
			const res = await bw.loadRequests();
			console.log('requests ', res);
			setRequests(res);
		} catch (error) {
			console.warn(error);
		}
	};

	return (
		<div className="main-container">
			<h1>Requests</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Type</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{requests.map((req, index) => (
						<tr key={`req_${index}`}>
							<td>{req.device_type}</td>
							<td>
								<Link to={`detail/${req.id}`}>{req.details}</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Requests;

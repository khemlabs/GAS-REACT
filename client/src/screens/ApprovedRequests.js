import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackEndWrapper from 'services/BackEndWrapper';

const ApprovedRequests = () => {
	const bw = new BackEndWrapper();
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		loadRequests();
	}, []);

	const loadRequests = async () => {
		try {
			const res = await bw.approvedRequests();
			setRequests(res);
		} catch (error) {
			console.warn(error);
		}
	};

	return (
		<div className="main-container">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Requests</Link>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Approved Requests
					</li>
				</ol>
			</nav>
			<h1>Approved Requests</h1>
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

export default ApprovedRequests;

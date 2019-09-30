import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import BackEndWrapper from 'services/BackEndWrapper';

const RequestDetails = ({ match }) => {
	const bw = new BackEndWrapper();

	const { id } = match.params;

	const [toHome, setToHome] = useState(false);
	const [request, setRequest] = useState({ device_type: '', details: '' });

	useEffect(() => {
		loadRequest();
	}, []);

	const loadRequest = async () => {
		try {
			console.log('loading request with id ', id);
			const req = await bw.requestDetails(id);
			console.log('requestDetails ', req);
			setRequest(req);
		} catch (error) {
			console.warn(error);
		}
	};

	const approve = async () => {
		try {
			await bw.approveRequest(id);
			setToHome(true);
		} catch (error) {
			console.warn(error);
		}
	};

	const reject = async () => {
		try {
			await bw.rejectRequest(id);
			setToHome(true);
		} catch (error) {
			console.warn(error);
		}
	};

	if (toHome) return <Redirect to="/" />;

	return (
		<div className="main-container">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<router-link to="/">Requests</router-link>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Request Details
					</li>
				</ol>
			</nav>

			<h1>Request Details</h1>
			<div className="section">
				<h5>Device Type</h5>
				{request.device_type}
			</div>

			<div className="section">
				<h5>Details</h5>
				{request.details}
			</div>

			<div className="section" v-if="req.status == 'new' ">
				<button type="button" className="btn btn-warning" onClick={() => reject()}>
					Reject
				</button>
				<button type="button" className="btn btn-primary" onClick={() => approve()}>
					Approve
				</button>
			</div>
		</div>
	);
};

RequestDetails.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default RequestDetails;

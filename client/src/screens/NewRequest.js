import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BackEndWrapper from 'services/BackEndWrapper';

const NewRequest = () => {
	const bw = new BackEndWrapper();
	const [toHome, setToHome] = useState(false);
	const [request, setRequest] = useState({ device_type: '', details: '' });

	const postRequest = async () => {
		await bw.newRequest(request);

		setToHome(true);
	};

	const updateKey = (key, event) => {
		const value = event.target.value;
		setRequest(prev => ({ ...prev, [key]: value }));
	};

	if (toHome) return <Redirect to="/" />;

	return (
		<div className="main-container">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Requests</Link>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						New Request
					</li>
				</ol>
			</nav>

			<h1>New Request</h1>
			<p>Enter the details of the device you want below.</p>
			<div className="form-group">
				<label htmlFor="type">Request type:</label>
				<select
					className="form-control"
					id="type"
					onChange={ev => updateKey('device_type', ev)}
					value={request.device_type}
				>
					<option value="">Select ...</option>
					<option value="laptop">Laptop</option>
					<option value="phone">Mobile Phone</option>
					<option value="test_aparatus">Testing aparatus</option>
					<option value="server">Server </option>
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="exampleFormControlTextarea1">Describe details here</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
					value={request.details}
					onChange={ev => updateKey('details', ev)}
				></textarea>
			</div>
			<button type="button" className="btn btn-primary" onClick={() => postRequest()}>
				Create
			</button>
		</div>
	);
};

export default NewRequest;

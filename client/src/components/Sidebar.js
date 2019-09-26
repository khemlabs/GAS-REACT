import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
	<nav id="sidebar">
		<div className="sidebar-header">
			<h3>Request Management App</h3>
		</div>
		<ul className="list-unstyled components">
			<li>
				<Link to="/">Requests</Link>
			</li>
			<li>
				<Link to="/approved">Approved Requests</Link>
			</li>
			<li>
				<Link to="/new">New Request</Link>
			</li>
		</ul>
	</nav>
);

export default Sidebar;

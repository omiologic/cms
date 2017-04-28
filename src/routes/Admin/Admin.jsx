import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login, Sidebar } from 'APP/src/components';
import { Link } from 'react-router';
// import Sideber from 'APP/src/bootstrap/Sidebar';
import {Grid, Row, Col} from 'APP/src/bootstrap/bootstrap.index';

// require('./admin.stylesheet.scss');
const AdminComponent = (props) => {

	// if(props.auth) {
		// console.log(Sidebar)
		return (
			<div id="admin">
				<Sidebar.Container />				
				<div className="content">
					{ 
						props.children && React.cloneElement(props.children) 
					}
				</div>
			</div>
		);
	// } else {
	// 	return <Login />;
	// }	
};

const mapState = ({auth}) => ({auth});
export default connect(mapState)(AdminComponent);

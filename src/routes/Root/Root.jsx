import React, { Component } from 'react';
import { connect } from 'react-redux';

// require('./root.stylesheet.scss');
const RootComponent = (props) => {	
	console.log(props)
	return (
			<div id='body'>
				{ 
					props.children && React.cloneElement(props.children) 
				}
			</div>
	)
}

export default RootComponent;

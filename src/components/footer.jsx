import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer className="mt-5" style={{ borderTop: '.05rem solid lightgrey', padding: '1rem' }}>
				<h6 style={{ display: 'flex', justifyContent: 'center' }}>Built by Vitor Tomazzi</h6>
			</footer>
		);
	}
}

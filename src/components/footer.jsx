import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer style={{ borderTop: '.05rem solid lightgrey', padding: '1rem' }}>
				<h6 style={{ display: 'flex', justifyContent: 'center' }}>
					Built by Vitor Tomazzi <i class="fas fa-glasses" />
				</h6>
			</footer>
		);
	}
}

//className="mt-5"

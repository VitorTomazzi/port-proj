import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		const { id, title, subTitle, imgSrc, link, selected } = this.props.item;

		return (
			<div style={{ padding: '3rem' }}>
				<img src={imgSrc} alt={imgSrc} style={{ height: '200px', width: '320px' }} />
				<p>Card WORKSSSS</p>
			</div>
		);
	}
}

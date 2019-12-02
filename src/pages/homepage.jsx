import React, { Component } from 'react';
import Hero from '../components/hero';
import Carousel from '../components/carousel';

export default class HomePage extends Component {
	render() {
		const { title, subTitle } = this.props;

		return (
			<div>
				<Hero title={title} subTitle={subTitle} />
				<Carousel />
			</div>
		);
	}
}

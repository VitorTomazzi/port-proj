import React, { Component } from 'react';

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'FoodSpace',
					subTitle: 'Social platform for aspiring home chefs',
					imgSrc: '',
					link: 'https://foodspace-vt.herokuapp.com/',
					selected: false
				},
				{
					id: 1,
					title: 'Krunch',
					subTitle: 'Mock e-commerce store for cereal enthusiasts',
					imgSrc: '',
					link: 'https://krunch-cereal-glue.herokuapp.com/',
					selected: false
				},
				{
					id: 2,
					title: 'Tides of War',
					subTitle: 'Chance-based board game',
					imgSrc: '',
					link: 'https://vitortomazzi.github.io/Tides-of-War/',
					selected: false
				}
			]
		};
	}

	render() {
		return <div />;
	}
}

import React, { Component } from 'react';
import Card from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import foodspace from '../images/foodspace.png';
import krunch from '../images/krunch.png';
import tidesofwar from '../images/tidesofwar.png';

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'FoodSpace',
					subTitle: 'Social platform for aspiring home chefs',
					imgSrc: foodspace,
					link: 'https://foodspace-vt.herokuapp.com/',
					selected: false
				},
				{
					id: 1,
					title: 'Krunch',
					subTitle: 'Mock e-commerce store for cereal enthusiasts',
					imgSrc: krunch,
					link: 'https://krunch-cereal-glue.herokuapp.com/',
					selected: false
				},
				{
					id: 2,
					title: 'Tides of War',
					subTitle: 'Chance-based board game. Capture all of the pieces!',
					imgSrc: tidesofwar,
					link: 'https://vitortomazzi.github.io/Tides-of-War/',
					selected: false
				}
			]
		};
	}

	handleCardClick = (id, card) => {
		let items = [ ...this.state.items ];

		items[id].selected = items[id].selected ? false : true;

		items.forEach((item) => {
			if (item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items
		});
	};

	makeItems = (items) => {
		return items.map((item) => {
			return <Card item={item} onClick={(e) => this.handleCardClick(item.id, e)} key={item.id} />;
		});
	};

	render() {
		return (
			<Container fluid>
				<Row style={{ display: 'flex', justifyContent: 'space-around' }}>
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}
}

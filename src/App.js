import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import NavBar from './components/navbar';
import Footer from './components/footer';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'VitorCodes',
			headerlinks: [
				{ title: 'Home', path: '/' },
				{ title: 'Projects', path: '/projects' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' }
			],
			home: {
				title: 'VitorCodes'
			},
			projects: {
				title: 'Latest projects'
			},
			about: {
				title: 'About me'
			},
			contact: {
				title: "Let's connect"
			}
		};
	}

	render() {
		return (
			<Router>
				<Container fluid className="p-0">
					<NavBar />

					<Footer />
				</Container>
			</Router>
		);
	}
}

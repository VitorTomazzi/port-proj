import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

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
					<Navbar expand="lg" className="border-bottom" style={{ backgroundColor: 'violet' }}>
						<Navbar.Brand href="/home">VitorCodes</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link href="/projects">Projects</Nav.Link>
								<Nav.Link href="/about">About</Nav.Link>
								<Nav.Link href="/contact">Contact</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</Router>
		);
	}
}

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Hero from '../components/hero';

export default class ContactPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
			displayed: false,
			emailSent: false
		};
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({
			disabled: true
		});
	};

	render() {
		return (
			<div>
				<Hero title={this.props.title} />
				<Container>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group>
							<Form.Label htmlFor="full-name">Name</Form.Label>
							<Form.Control
								id="full-name"
								name="name"
								type="text"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control
								id="email"
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="message">Message</Form.Label>
							<Form.Control
								id="message"
								name="message"
								as="textarea"
								rows="4"
								value={this.state.message}
								onChange={this.handleChange}
							/>
						</Form.Group>
					</Form>
				</Container>
			</div>
		);
	}
}

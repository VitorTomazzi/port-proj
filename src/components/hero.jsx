import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class hero extends Component {
	render() {
		return (
			<div
				className="bg-transparent p-0"
				style={{
					border: '.01rem solid black',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					//height: '80vh'
					//width: '100vw'
				}}>
				<h1 className="font-weight-bold" style={{ fontSize: '4rem' }}>
					{this.props.title}
				</h1>
				<h6 className="font-weight-light">{this.props.subTitle}</h6>
			</div>
		);
	}
}

//md={8} sm={12

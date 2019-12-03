import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		const { id, title, subTitle, imgSrc, link, selected } = this.props.item;

		return (
			<div
				style={{
					padding: '1rem',
					margin: '1rem',
					//border: '.01rem solid black',
					display: 'flex',
					//justifyContent: 'space-around',
					alignItems: 'center',
					flexDirection: 'column'
				}}>
				<a href={link} rel="noopener noreferrer" target="_blank">
					<img
						src={imgSrc}
						alt={imgSrc}
						style={{
							//height: '100%',
							width: '100%',
							border: '.01rem solid black',
							borderRadius: '.1rem',
							marginBottom: '1rem',
							boxShadow: '2px 5px 2px rgba(0, 0, 0, 0.2)'
						}}
					/>
				</a>
				<div
					className="d-flex justify-content-center flex-column"
					style={{ color: 'white', textAlign: 'center' }}>
					<h5 className="bfont">{title}</h5>
					<h6 className="lfont">{subTitle}</h6>
				</div>
			</div>
		);
	}
}

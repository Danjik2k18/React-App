import logo from './logo.svg';
import './App.css';

import React from 'react';

export const App = () => {
	const currentYear = getFullYear();

	const logoElement = React.createElement('img', {
		src: logo,
		className: 'App-logo',
		alt: 'logo',
	});

	const textElement = React.createElement(
		'p',
		null,
		'Edit ',
		React.createElement('code', null, 'src/App.js'),
		' and save to reload.',
	);

	const linkElement = React.createElement(
		'a',
		{
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'Learn React',
	);

	const yearElement = React.createElement('span', null, currentYear);

	const headerElement = React.createElement(
		'header',
		{ className: 'App-header' },
		logoElement,
		textElement,
		linkElement,
		yearElement,
	);

	const appElement = React.createElement('div', { className: 'App' }, headerElement);

	return appElement;
};

function getFullYear() {
	let today = new Date();
	let year = today.getFullYear();
	return year;
}

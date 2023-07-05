import logo from './logo.svg';
import './App.css';
import { createElement } from "react";

function Greeting({ name }) {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement(
				'img',
				{
					className: 'App-logo',
					src: logo,
					alt: "logo",
				},
			),
			createElement(
				'p',
				null,
				'Home work',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				'Learn React',
			),
			createElement(
				'p',
				null,
				new Date().getFullYear()
			)
		)
	)
}

export function App() {
	return createElement(
		Greeting
	)
}

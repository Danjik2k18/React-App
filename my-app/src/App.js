import logo from './logo.svg';
import './App.css';

export const App = () => {
	const currentYear = getFullYear(); // Императивный стиль

	return (
		// Декларативный стиль начинается здесь:
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span>{currentYear} </span>
			</header>
		</div>
		// Декларативный стиль заканчивается здесь
	);
};

function getFullYear() {
	let today = new Date(); // Императивный стиль
	let year = today.getFullYear(); // Императивный стиль
	return year; // Императивный стиль
}

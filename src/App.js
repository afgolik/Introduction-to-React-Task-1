import logo from './logo.svg';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Home work</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
}

// как-будто нет императивного подхода, только декларативный

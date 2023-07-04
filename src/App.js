import logo from './logo.svg';
import './App.css';
import './index.css';

export const App = () => {
	const app = document.createElement('div')
	app.className = 'App'
	document.body.append(app)
	const appHeader = document.createElement('header')
	appHeader.className = 'App-header'
	app.append(appHeader)
	const img = document.createElement('img')
	img.className = 'App-logo'
	img.src = logo
	img.alt = "logo"
	appHeader.append(img)
	const about = document.createElement('p')
	about.textContent = 'Home work'
	appHeader.append(about)
	const link = document.createElement('a')
	link.className = 'App-link'
	link.href = "https://reactjs.org"
	link. target = "_blank"
	link.rel = "noopener noreferrer"
	link.textContent = 'Learn React'
	appHeader.append(link)
	const today = new Date().getFullYear()
	const dateInHTML = document.createElement('p')
	dateInHTML.append(today)
	appHeader.append(dateInHTML)

	return app
}
//при запуске в браузере выскакивает ошибка на весь экран, но если ее закрыть, то внешне как при использовании jsx

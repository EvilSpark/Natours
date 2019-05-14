import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/header';
import About from './components/about/about';
import Features from './components/features/features';
import './assests/vendor/icons/styles.css';
//import Grid from './components/grid/grid';

class App extends Component {
	render() {
		return (
			<div>
				<Header />,
				<About />,
				<Features />
			</div>
		);
	}
}

export default App;

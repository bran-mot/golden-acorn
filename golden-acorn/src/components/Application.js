import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import SimpleAcornApp from './SimpleAcornApp';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router} from 'react-router-dom';

function Home() {
	return <h2>Golden Acorn is Life</h2>;
}

function App() {
	return (
		<div className="App">
			<Router>
				<NavigationBar />
			</Router>
		</div>
	);
}

export default App;

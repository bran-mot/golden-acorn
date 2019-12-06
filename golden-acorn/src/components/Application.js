import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import SimpleAcornApp from './SimpleAcornApp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
	return <h2>Golden Acorn is Life</h2>;
}

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Homepage</Link>
							</li>
							<li>
								<Link to="/simple/states">With States</Link>
							</li>
						</ul>
					</nav>

					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/simple/states">
							<SimpleAcornApp />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;

import React from 'react';
import SimpleAcornApp from './SimpleAcornApp';
import Home from './Home';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom';

export default function NavigationBar(props) {
	return (
		<div>
			<Switch>
				{/* If the current URL is /about, this route is rendered
		while the rest are ignored */}
				<Route exact path="/simple/states">
					<SimpleAcornApp />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<nav>
				<ul>
					<li>
						<NavLink to="/" activeClassName="active">
							Homepage
						</NavLink>
					</li>
					<li>
						<NavLink to="/simple/states" activeClassName="active">
							With States
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

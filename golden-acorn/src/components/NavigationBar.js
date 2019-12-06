import React from 'react';
import SimpleAcornApp from './SimpleAcornApp';
import Home from './Application.js';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

export default function NavigationBar(props) {
	return (
		<div>
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
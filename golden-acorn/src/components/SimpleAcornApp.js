import React from 'react';
import '../App.css';
import Button from './Button';
import Display from './Display';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Application.js';

export default class SimpleAcornApp extends React.Component {
	constructor() {
		super();
		this.addOne = this.addOne.bind(this);
		this.minusOne = this.minusOne.bind(this);
		this.state = {
			number: 0,
			name: 'ilayda',
			food: 'mcFlurry'
		};
	}

	addOne() {
		this.setState(previousState => {
			return {
				number: previousState.number + 1
			};
		});
	}

	minusOne() {
		if (this.state.number >= 1) {
			this.setState(previousState => {
				return {
					number: previousState.number - 1
				};
			});
		}
	}

	render() {
		return (
			<div className="App">

				<NavigationBar />
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/simple/states">
						
							<Button onClick={this.addOne}>Roll One</Button>
							<Display>{this.state.number}</Display>
							<Button onClick={this.minusOne}> Smoke one</Button>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		);
	}
}

import React from "react";
import "./App.css";
import { data } from "./data";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/About";
import Work from "./component/Work";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Fotter from "./component/Footer";
import Skills from "./component/Skills";

const App = () => {
	console.log(data.content);
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
				    <Route exact path='/' component={About} />
					<Route exact path='/About' component={About} />
					<Route exact path='/Work' component={Work} />
					 <Route exact path='/Skills' component={Skills} />
					<Route exact path='/Projects' component={Projects} />
					<Route exact path='/Contact' component={Contact} />
				</Switch>
				<Fotter />
			</Router>
		</div>
	);
};

export default App;

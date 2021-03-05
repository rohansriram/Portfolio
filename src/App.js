import React from "react";
import "./App.css";
import { data } from "./data";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
import {Redirect} from 'react-router';
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
			<Router history ={history} basename = {process.env.PUBLIC_URL}>
				<NavBar />
				<Switch>
				{/* <Link to="/About" /> */}
					{/* <Redirect from='/#/about' to="/About" />
					<Redirect from='/#/work' to="/Work" /> */}
				    <Route exact path='/' component={About} />
					<Route exact path='/Portfolio' component={About} />
					<Route exact path={process.env.PUBLIC_URL + '/About'} component={About} />
					<Route exact path={process.env.PUBLIC_URL + '/Work'} component={Work} />
					<Route exact path='/Skills' component={Skills} />
					<Route exact path='/Projects' component={Projects} />
					<Route exact path='/Contact' component={Contact} />
				</Switch>
				<Fotter />
			</Router>
		</div>
	);
};
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

export default App;

import React from 'react';
import './App.css'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

// Containers
import Header from '../../components/Header/Header'
import Home from '../Home/Home'
import MyDocuments from '../MyDocuments/MyDocuments'
import MyConsumption from '../MyConsumption/MyConsumption'
import MyPowerplants from '../MyPowerplants/MyPowerplants'
import Contact from '../Contact/Contact'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/my-documents" component={MyDocuments} />
					<Route path="/my-consumption" component={MyConsumption} />
					<Route path="/my-powerplants" component={MyPowerplants} />
					<Route path="/contact" component={Contact} />
					<Route path="/api/webapp/37f7ed03-42a3-4151-a01b-452a21a93b14/preview" exact render={() => <Redirect to="/" />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
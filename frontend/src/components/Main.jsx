import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const Main = () => {
	return (
		<div className='main'>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/home' component={Home} />
			</Switch>
		</div>
	);
};

export default Main;

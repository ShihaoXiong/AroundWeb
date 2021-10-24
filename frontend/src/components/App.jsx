import React, { useState } from 'react';
import TopBar from './TopBar';
import Main from './Main';
import { TOKEN_KEY } from '../constants';
import '../styles/App.css';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(TOKEN_KEY) ? true : false);

	const logout = () => {
		localStorage.removeItem(TOKEN_KEY);
		setIsLoggedIn(false);
	};

	return (
		<div className='App'>
			<TopBar isLoggedIn={isLoggedIn} handleLogout={logout} />
			<Main />
		</div>
	);
}

export default App;

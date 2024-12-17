import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../menu/Menu.jsx'; // Adjust the path as necessary

const Home = () => {
	const location = useLocation();
	const user = location.state?.user;
	return (
		<div className="home">
			{/* <div>`Welcome {user && user.username}!`</div>
			<br /> */}
			<Menu />
		</div>
	);
};

export default Home;

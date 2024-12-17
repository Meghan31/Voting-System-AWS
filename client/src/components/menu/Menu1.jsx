import React from 'react';
import './Menu.scss';

import { useLocation } from 'react-router-dom';
const Menu = () => {
	const location = useLocation();
	const user = location.state?.user;
	return (
		<div className="menu">
			<div className="profile">
				<div className="profile-image">
					<img
						className="image"
						src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account
                    -profile-user-icon-png.png"
						alt="profile"
					/>
				</div>
				<div className="details">
					<h1>{user && user.username}</h1>
					<h2>{user && user.email}</h2>
				</div>
			</div>
			<div className="tiles">
				<div className="tile">
					<h2 className="tilename">Tile 1</h2>
					<p>Image from AWS server</p>
				</div>
				<div className="tile">
					<h2 className="tilename">Tile 1</h2>
					<p>Image from AWS server</p>
				</div>
				<div className="tile">
					<h2 className="tilename">Tile 1</h2>
					<p>Image from AWS server</p>
				</div>
				<div className="tile">
					<h2 className="tilename">Tile 1</h2>
					<p>Image from AWS server</p>
				</div>
			</div>
		</div>
	);
};

export default Menu;

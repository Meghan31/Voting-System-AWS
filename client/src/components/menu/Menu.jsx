import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logout } from '../logout/Logout';
import './Menu.scss';

const Menu = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const user = location.state?.user;

	return (
		<div className="menu">
			<div className="profile">
				<div className="profile-image">
					<img
						className="image"
						src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-profile-user-icon-png.png"
						alt="profile"
					/>
				</div>
				<div className="details">
					<h1>{user && user.username}</h1>
					<h2>{user && user.email}</h2>
				</div>
				<div className="logout">
					<Logout />
				</div>
			</div>
			<div className="tiles">
				<div
					className="tile"
					onClick={() => (navigate('/tile1'), window.location.reload())}
				>
					<h2>Donald Trump vs Kamala Harris</h2>
					<p>View Profile</p>
				</div>
				<div
					className="tile"
					onClick={() => (navigate('/tile2'), window.location.reload())}
				>
					<h2>Narendra Modi vs Rahul Gandhi</h2>
					<p>View Profile</p>
				</div>
				<div
					className="tile"
					onClick={() => (navigate('/tile3'), window.location.reload())}
				>
					<h2>USA vs Russia</h2>
					<p>View Profile</p>
				</div>
			</div>
		</div>
	);
};

export default Menu;

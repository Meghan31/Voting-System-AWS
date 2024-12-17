import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			window.alert('Please fill out all fields');
			return;
		}

		axios
			.post(
				'http://localhost:3001/login',
				{ email, password },
				{ withCredentials: true }
			)
			.then((response) => {
				if (response.status === 200) {
					axios
						.get('http://localhost:3001/user', { withCredentials: true })
						.then((response) => {
							if (response.data) {
								navigate('/home', { state: { user: response.data } });
							}
						})
						.catch((error) => {
							console.log(error);
							window.alert('Unauthorized access');
						});
				} else {
					window.alert('Invalid credentials');
				}
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status === 400) {
					window.alert('Invalid credentials');
				}
			});
	};
	return (
		<div>
			<div className="navbar">
				<h1 className="votehead">Voting System for Local Communities</h1>
				<div className="lrbuttons"></div>
			</div>
			<div className="login">
				<h2 className="heading">Login</h2>
				<br />
				<div className="email">
					<h3>Enter your Email</h3>
					<input
						required
						className="emailbox"
						type="text"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="password">
					<h3>Enter your Password</h3>
					<input
						required
						className="emailbox"
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<br />
				<div className="submit">
					<button
						to="/register"
						className="registerbuttonbox"
						onClick={() => navigate('/register')}
					>
						Register
					</button>
					<button className="submitbuttonbox" onClick={handleLogin}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;

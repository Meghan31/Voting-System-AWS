import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!username || !email || !password) {
			window.alert('Please fill out all fields');
			return;
		}

		axios
			.post('http://localhost:3001/register', { username, email, password })
			.then((response) => {
				if (response.status === 201) {
					alert('User registered successfully');
					navigate('/login');
				}
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status === 400) {
					window.alert('User already exists, Please login');
				}
			});
	};

	return (
		<div>
			<div className="register">
				<h2 className="heading">Register</h2>
				<div className="username">
					<h3>Confirm your Username</h3>
					<input
						required
						className="emailbox"
						type="text"
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
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
						className="loginbuttonbox"
						onClick={() => (navigate('/login'), window.location.reload())}
					>
						Login
					</button>
					<button className="submitbuttonbox" onClick={handleSubmit}>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;

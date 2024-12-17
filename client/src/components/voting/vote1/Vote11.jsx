import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Vote11 = () => {
	const [ssn, setSSN] = useState('');
	const [ssnPassword, setSSNPassword] = useState('');
	const voteTo = 'Donald Trump';
	const navigate = useNavigate();

	const handleVote = async (e) => {
		e.preventDefault();

		if (!ssn || !ssnPassword) {
			window.alert('Please fill out all fields');
			return;
		} else {
			console.log(ssn + ' ' + ssnPassword + ' ' + voteTo);
			window.alert('Your vote has been registered');
		}
		axios
			.post('http://localhost:3001/vote1', { voteTo, ssn, ssnPassword })
			.then((response) => {
				if (response.status === 201) {
					alert('Your Vote registered successfully');
					navigate('/tile1');
				}
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status === 400) {
					window.alert('Vote already exists');
				}
			});
	};

	return (
		<div>
			<div className="navbar">
				<h3 className="votehead">You are voting for Donald Trump</h3>
				<div className="lrbuttons"></div>
			</div>
			<div className="login">
				<h2 className="heading">Vote Here</h2>
				<br />
				<div className="email">
					<h3>Enter your SSN</h3>
					<input
						required
						className="emailbox"
						type="text"
						placeholder="SSN"
						onChange={(e) => setSSN(e.target.value)}
					/>
				</div>
				<div className="password">
					<h3>Enter your SSN Password</h3>
					<input
						required
						className="emailbox"
						type="password"
						placeholder="SSN Password"
						onChange={(e) => setSSNPassword(e.target.value)}
					/>
				</div>
				<br />
				<div className="submit">
					<button
						to="/register"
						className="registerbuttonbox"
						onClick={() => navigate('/tile1')}
					>
						Back
					</button>
					<button className="submitbuttonbox" onClick={handleVote}>
						Register Your Vote
					</button>
				</div>
			</div>
		</div>
	);
};

export default Vote11;

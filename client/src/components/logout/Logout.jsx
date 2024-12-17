import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		axios
			.post('http://localhost:3001/logout', {}, { withCredentials: true })
			.then((response) => {
				alert(response.data.message);
				if (response.status === 200) {
					navigate('/login');
				}
			})
			.catch((error) => {
				console.log(error);
				alert('Logout failed');
			});

		localStorage.removeItem('user');
		window.location.href = '/login';
	};
	return (
		<div>
			<button className="submitbuttonbox" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

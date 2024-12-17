import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Tile1 from './components/candidates/Tile1.jsx';
import Tile2 from './components/candidates/tile2.jsx';
import Tile3 from './components/candidates/tile3.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/register/Signup.jsx';
import Vote11 from './components/voting/vote1/Vote11.jsx';
import Vote12 from './components/voting/vote1/Vote12.jsx';
import Vote21 from './components/voting/vote2/Vote21.jsx';
import Vote22 from './components/voting/vote2/Vote22.jsx';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Signup />} />
				<Route path="/tile1" element={<Tile1 />} />
				<Route path="/tile2" element={<Tile2 />} />
				<Route path="/tile3" element={<Tile3 />} />
				<Route path="/vote11" element={<Vote11 />} />
				<Route path="/vote12" element={<Vote12 />} />
				<Route path="/vote21" element={<Vote21 />} />
				<Route path="/vote22" element={<Vote22 />} />
			</Routes>
		</Router>
	);
};

export default App;

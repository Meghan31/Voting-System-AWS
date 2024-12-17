import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tile.scss';
const Tile1 = () => {
	const navigate = useNavigate();
	// 	const url = "https://<your-s3-bucket>.s3.amazonaws.com/politician1.json";

	// fetch(url)
	//   .then(response => response.json())
	//   .then(data => {
	//     document.getElementById("name").textContent = data.name;
	//     document.getElementById("political_party").textContent = data.political_party;
	//     document.getElementById("about").textContent = data.about;
	//     document.getElementById("profile_photo").src = data.profile_photo;
	//   })
	//   .catch(error => console.error('Error fetching data:', error));

	return (
		<div className="tile1">
			<h1 className="heading">Donald Trump vs Kamala Harris</h1>
			<h2 className="confirm">
				&quot;Please select one candidate and confirm your choice.&quot;
			</h2>
			<div className="profiles">
				<div className="p12">
					<h2>Donald Trump</h2>
					<div className="fullparty">
						<h3 className="partyname">Republican</h3>
						<img className="party" src="./public/assets/republican.jpeg" />
					</div>

					<p>
						Donald John Trump is an American politician, media personality, and
						businessman who served as the 45th president of the United States
						from 2017 to 2021.
					</p>
					<img
						className="image"
						src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
						alt="Donald Trump"
					/>
					<br />

					<div className="confirm">
						<button
							className="confirm-button1"
							onClick={() => navigate('/vote11')}
						>
							VOTE
						</button>
					</div>
				</div>
				<div className="p12">
					<h2>Kamala Hariss</h2>
					<div className="fullparty">
						<h3 className="partyname">Democratic</h3>
						<img className="party" src="./public/assets/democrat.jpeg" />
					</div>
					<p>
						Kamala Harris, born October 20, 1964, is the 49th U.S. Vice
						President, a former senator, and the first female, Black, and South
						Asian VP.
					</p>
					<img
						className="image"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/440px-Kamala_Harris_Vice_Presidential_Portrait.jpg"
						alt="Kamala Harris"
					/>
					<br />
					<div className="confirm">
						<button
							className="confirm-button2"
							onClick={() => navigate('/vote12')}
						>
							VOTE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tile1;

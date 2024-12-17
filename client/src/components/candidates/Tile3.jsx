import React from 'react';

const Tile3 = () => {
	return (
		<div className="tile1">
			<h1 className="heading">USA vs Russia</h1>
			<h2 className="confirm">
				&quot;Please select one candidate and confirm your choice.&quot;
			</h2>
			<div className="profiles">
				<div>
					<h2>USA</h2>
					<div className="fullparty">
						<h3 className="partyname">BJP</h3>
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
						<button className="confirm-button1">VOTE</button>
					</div>
				</div>
				<div>
					<h2>Russia</h2>
					<div className="fullparty">
						<h3 className="partyname">Congress</h3>
						<img className="party" src="./public/assets/democrat.jpeg" />
					</div>
					<p>
						Donald John Trump is an American politician, media personality, and
						businessman who served as the 45th president of the United States
						from 2017 to 2021.
					</p>
					<img
						className="image"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/440px-Kamala_Harris_Vice_Presidential_Portrait.jpg"
						alt="Kamala Harris"
					/>
					<br />
					<div className="confirm">
						<button className="confirm-button2">VOTE</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tile3;

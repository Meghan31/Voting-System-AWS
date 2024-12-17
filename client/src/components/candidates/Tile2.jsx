import React from 'react';

const Tile2 = () => {
	return (
		<div className="tile1">
			<h1 className="heading">Narendra Modi vs Rahul Gandhi</h1>
			<h2 className="confirm">
				&quot;Please select one candidate and confirm your choice.&quot;
			</h2>
			<div className="profiles">
				<div>
					<h2>Narendra Modi</h2>
					<div className="fullparty">
						<h3 className="partyname">BJP</h3>
						<img className="party" src="./public/assets/bjp.jpeg" />
					</div>

					<p>
						Donald John Trump is an American politician, media personality, and
						businessman who served as the 45th president of the United States
						from 2017 to 2021.
					</p>
					<img
						className="image"
						src="./public/assets/modi.jpeg"
						alt="Donald Trump"
					/>
					<br />

					<div className="confirm">
						<button className="confirm-button1">VOTE</button>
					</div>
				</div>
				<div>
					<h2>Rahul Gandhi</h2>
					<div className="fullparty">
						<h3 className="partyname">Congress</h3>
						<img className="party" src="./public/assets/congress.jpeg" />
					</div>
					<p>
						Donald John Trump is an American politician, media personality, and
						businessman who served as the 45th president of the United States
						from 2017 to 2021.
					</p>
					<img
						className="image"
						src="./public/assets/Rahul Gandhi.jpeg"
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

export default Tile2;

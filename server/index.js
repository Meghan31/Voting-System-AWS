const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const UserModel = require('./model/User');

dotenv.config();

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
);

mongoose
	.connect(process.env.MONGO_URI)
	.then(console.log('Connected to MongoDB'))
	.catch((err) => console.log(`mongoose error is ${err}`));

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URI,
		}),
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

// app.post('/register', async (req, res) => {
// 	try {
// 		const { username, email, password } = req.body;
// 		console.log(
// 			`username is ${username} email is ${email} password is ${password}`
// 		);

// 		const existingUser = await UserModel.findOne({ email });
// 		if (existingUser) {
// 			return res.status(400).json({ message: 'User already exists' });
// 		}

// 		const salt = await bcrypt.genSalt(10);
// 		const hashedPassword = await bcrypt.hash(password, salt);

// 		const user = new UserModel({
// 			username,
// 			email,
// 			password: hashedPassword,
// 		});

// 		const savedUser = await user.save();
// 		res.status(201).json(savedUser);
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });

app.post('/register', async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Check if user already exists
		const existingUser = await UserModel.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}

		// Validate user input
		if (!username || !email || !password) {
			return res.status(400).json({ message: 'All fields are required' });
		}

		// Hash password before saving it
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user
		const user = new UserModel({
			username,
			email,
			password: hashedPassword,
		});

		const savedUser = await user.save();
		res.status(201).json(savedUser);
	} catch (error) {
		// Log the error for debugging
		console.error('Registration error:', error);

		// Check for specific errors
		if (error.code && error.code === 11000) {
			return res.status(400).json({ message: 'Email already exists' });
		}

		res.status(500).json({ message: 'Internal server error' });
	}
});

app.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: 'User does not exist' });
		}
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return res.status(400).json({ message: 'Invalid password' });
		}
		req.session.user = {
			id: user._id,
			username: user.username,
			email: user.email,
		};
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

app.get('/user', (req, res) => {
	if (req.session.user) {
		res.json(req.session.user);
	} else {
		res.status(400).json({ message: 'Unauthorized' });
	}
});

app.post('/logout', (req, res) => {
	if (req.session.user) {
		req.session.destroy((err) => {
			if (err) {
				return res.status(500).json({ message: err });
			}
			res.clearCookie('connect.sid');
			res.json({ message: 'Logged out' });
		});
	} else {
		res.status(400).json({ message: 'No Session Found' });
	}
});

// app.post('/vote', async (req, res) => {
// 	try {
// 		const { sessionId, voteOption } = req.body;
// 		const userId = req.session.user.id;
// 		const vote = new VoteModel({
// 			userId,
// 			sessionId,
// 			voteOption,
// 		});
// 		const savedVote = await vote.save();
// 		res.status(201).json(savedVote);
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });

// app.post('/vote', async (req, res) => {
// 	try {
// 		const { sessionId, candidate } = req.body;
// 		const userId = req.session.user.id;

// 		const user = await UserModel.findById(userId);
// 		if (!user) {
// 			return res.status(400).json({ message: 'User not found' });
// 		}

// 		// Check if user has already voted in this session
// 		const hasVoted = user.votes.some(
// 			(vote) => vote.sessionId.toString() === sessionId
// 		);
// 		if (hasVoted) {
// 			return res
// 				.status(400)
// 				.json({ message: 'User has already voted in this session' });
// 		}

// 		// Register the vote
// 		user.votes.push({ sessionId, candidate });
// 		await user.save();
// 		res.status(200).json({ message: 'Vote registered successfully' });
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });

// app.post('/vote', async (req, res) => {
// 	try {
// 		const { sessionId, candidate } = req.body;
// 		const userId = req.session.user.id;

// 		const user = await UserModel.findById(userId);
// 		if (!user) {
// 			return res.status(400).json({ message: 'User not found' });
// 		}

// 		// Check if user has already voted in this session
// 		const hasVoted = user.votes.some(
// 			(vote) => vote.sessionId.toString() === sessionId
// 		);
// 		if (hasVoted) {
// 			return res
// 				.status(400)
// 				.json({ message: 'User has already voted in this session' });
// 		}

// 		// Register the vote
// 		user.votes.push({ sessionId, candidate });
// 		await user.save();

// 		// Update session votes
// 		const session = await SessionModel.findById(sessionId);
// 		if (session) {
// 			session.votes.set(candidate, (session.votes.get(candidate) || 0) + 1);
// 			await session.save();
// 			res.status(200).json({ message: 'Vote registered successfully' });
// 		} else {
// 			res.status(404).json({ message: 'Session not found' });
// 		}
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });

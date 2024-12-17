// const express = require('express');
// const bcrypt = require('bcrypt');
// const UserModel = require('../model/User');

// const router = express.Router();

// router.post('/register', (req, res) => {
// 	console.log('Register endpoint hit with:', req.body);
// 	res.status(200).send('Debug: Endpoint reached');
// });

// // router.post('/register', async (req, res) => {
// // 	try {
// // 		const { username, email, password } = req.body;

// // 		if (!username || !email || !password) {
// // 			return res.status(400).json({ message: 'All fields are required' });
// // 		}

// // 		const existingUser = await UserModel.findOne({ email });
// // 		if (existingUser) {
// // 			return res.status(400).json({ message: 'User already exists' });
// // 		}

// // 		const salt = await bcrypt.genSalt(10);
// // 		const hashedPassword = await bcrypt.hash(password, salt);

// // 		const user = new UserModel({
// // 			username,
// // 			email,
// // 			password: hashedPassword,
// // 		});

// // 		const savedUser = await user.save();
// // 		res.status(201).json(savedUser);
// // 	} catch (error) {
// // 		console.error('Registration error:', error);
// // 		res.status(500).json({ message: 'Internal server error' });
// // 	}
// // });

// router.post('/login', async (req, res) => {
// 	try {
// 		const { email, password } = req.body;
// 		const user = await UserModel.findOne({ email });

// 		if (!user) {
// 			return res.status(400).json({ message: 'User does not exist' });
// 		}

// 		const validPassword = await bcrypt.compare(password, user.password);
// 		if (!validPassword) {
// 			return res.status(400).json({ message: 'Invalid password' });
// 		}

// 		req.session.user = {
// 			id: user._id,
// 			username: user.username,
// 			email: user.email,
// 		};

// 		res.status(200).json(user);
// 	} catch (err) {
// 		console.error('Login error:', err);
// 		res.status(500).json({ message: 'Internal server error' });
// 	}
// });

// router.get('/me', (req, res) => {
// 	if (req.session.user) {
// 		res.json(req.session.user);
// 	} else {
// 		res.status(401).json({ message: 'Unauthorized' });
// 	}
// });

// router.post('/logout', (req, res) => {
// 	if (req.session.user) {
// 		req.session.destroy((err) => {
// 			if (err) {
// 				return res.status(500).json({ message: 'Logout failed' });
// 			}
// 			res.clearCookie('connect.sid');
// 			res.json({ message: 'Logged out successfully' });
// 		});
// 	} else {
// 		res.status(400).json({ message: 'No session found' });
// 	}
// });

// module.exports = router;

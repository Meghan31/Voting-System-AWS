// const express = require('express');
// const SessionModel = require('../model/User');

// const router = express.Router();

// router.post('/', async (req, res) => {
// 	try {
// 		const { title, description, options } = req.body;

// 		if (!title || !description || !options || !Array.isArray(options)) {
// 			return res.status(400).json({ message: 'Invalid data' });
// 		}

// 		const session = new SessionModel({
// 			title,
// 			description,
// 			options,
// 		});

// 		const savedSession = await session.save();
// 		res.status(201).json(savedSession);
// 	} catch (error) {
// 		console.error('Session creation error:', error);
// 		res.status(500).json({ message: 'Internal server error' });
// 	}
// });

// router.get('/', async (req, res) => {
// 	try {
// 		const sessions = await SessionModel.find();
// 		res.status(200).json(sessions);
// 	} catch (error) {
// 		console.error('Fetching sessions error:', error);
// 		res.status(500).json({ message: 'Internal server error' });
// 	}
// });

// router.post('/:id/vote', async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const { candidate } = req.body;

// 		const session = await SessionModel.findById(id);
// 		if (!session) {
// 			return res.status(404).json({ message: 'Session not found' });
// 		}

// 		session.votes.set(candidate, (session.votes.get(candidate) || 0) + 1);
// 		await session.save();

// 		res.status(200).json({ message: 'Vote registered successfully' });
// 	} catch (error) {
// 		console.error('Voting error:', error);
// 		res.status(500).json({ message: 'Internal server error' });
// 	}
// });

// module.exports = router;

import express from 'express';
import UserController from '../controllers/user_controller.js';

const router = express.Router();

// GET /users
router.get('/users', async (req, res) => {
    try {
        const users = await UserController.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /users/:user_id
router.get('/users/:user_id', async (req, res) => {
    try {
        const user = await UserController.getUser(parseInt(req.params.user_id));
        if (!user) {
            return res.status(404).json({ detail: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /users
router.post('/users', async (req, res) => {
    try {
        const user = await UserController.createUser(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
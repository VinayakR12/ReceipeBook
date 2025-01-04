import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controller/authController.js';

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;

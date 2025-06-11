import express, { Router } from 'express';
import { body } from 'express-validator';
import { register, login, verifyToken } from '../controllers/auth.controller';

const router: Router = express.Router();

// Register route
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    // body('name').notEmpty().withMessage('Name is required'),
  ],
  register
);

// Login route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);

// Verify token route
router.get('/verify', verifyToken);

export default router; 
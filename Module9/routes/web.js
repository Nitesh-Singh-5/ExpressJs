import express from 'express';
const router = express.Router();
import { home, about } from '../controllers/HomeController.js';

router.get('/', home);

router.get('/about', about);

export default router;
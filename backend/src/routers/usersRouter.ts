import { Router } from 'express';
import { addUser, loginUser, getUser, logoutUser } from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', addUser);
router.post('/login', loginUser);
router.get('/me', protect, getUser);
router.post('/logout', logoutUser);

export default router;

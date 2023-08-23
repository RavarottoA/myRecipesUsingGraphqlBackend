import Router from 'express';
import { createUser, loginUser } from '../controllers/users.controllers.js'; 

const router = Router();

router.post('/users/register', createUser);
router.post('/users/singIn', loginUser);

export default router;

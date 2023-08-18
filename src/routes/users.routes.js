import Router from 'express';
import { createUser } from '../controllers/users.controllers.js'; 

const router = Router();

router.post('/users/register', createUser);

export default router;

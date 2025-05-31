import { Router } from 'express';
import contactsRouter from './contacts.routers.js';
import authRouter from './auth.routers.js';

const router = Router();

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

export default router;

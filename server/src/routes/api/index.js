import { Router } from 'express';
import post from './post';
import user from './user';
import comment from './comment';

const router = Router();
router.get('/', (_, res) => res.sendStatus(404));
router.use('/posts', post);
router.use('/comments', comment);
router.use('/users', user);

export default router;

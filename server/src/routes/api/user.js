import {Router} from 'express';
import { createUser, getAnUser, login} from '../../controllers';

const router = Router();

router.get('/',getAnUser);
router.post('/login',login);
router.post('/register',createUser);

export default router;

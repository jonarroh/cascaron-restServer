import { Router } from 'express';
import {
	getUser,
	putUser,
	postUser,
	deleteUser
} from '../controllers/index.js';
const router = Router();
router.get('/', getUser);

router.put('/:id', putUser);

router.post('/', postUser);

router.delete('/', deleteUser);

export default router;

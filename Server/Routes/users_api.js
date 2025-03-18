import express from 'express';
import { getUserById } from '../Handlers/get_handler.js';
import { deleteUserById } from '../Handlers/delete_handler.js';
import { deleteAllUsers } from '../Handlers/delete_handler.js';
import { addNewUser } from '../Handlers/post_handler.js';

const router = express.Router();

router.get('/:userId', getUserById);

router.delete('/:userId', deleteUserById);

router.delete('/', deleteAllUsers);

router.post('/', addNewUser);

export default router;
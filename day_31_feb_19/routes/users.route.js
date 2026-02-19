import express from 'express';
import { createUser, deleteUser, fetchUserById, fetchUsers, updateUser } from '../controllers/user.controllers.js';
var router = express.Router();


// User Routes
router.get('/', fetchUsers);
router.get('/:id', fetchUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

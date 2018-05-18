import express from 'express';

// import user service 
import * as userService from '../services/users.service';

// get an instance of express router
const router = express.Router();

// setup routes for getting all users and adding a user
router.route('/')
    .get(userService.getUsers)
    .post(userService.addUser);

// setup routes for getting a user, updating a user, and deleting a user
router.route('/:id')
    .get(userService.getUser)
    .put(userService.updateUser)
    .delete(userService.deleteUser);

export default router;

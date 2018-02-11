import express from 'express';

// import user operations 
import * as userOperations from '../server/userOperations';

// get an instance of express router
const router = express.Router();

// setup routes for getting all users and adding a user
router.route('/')
    .get(userOperations.getUsers)
    .post(userOperations.addUser);

// setup routes for getting a user, updating a user, and deleting a user
router.route('/:id')
    .get(userOperations.getUser)
    .put(userOperations.updateUser)
    .delete(userOperations.deleteUser);

export default router;

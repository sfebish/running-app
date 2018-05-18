import { handleSuccess, handleError } from './express.helpers';
import { UserRepository } from '../repositories/user.repository';

const userRepo = new UserRepository();

// Endpoint to retrieve all users from the database
export const getUsers = (req, res) => {
    userRepo.getAll()
        .then(users => handleSuccess.call(res, users))
        .catch(err => handleError.call(res, err));
};

// Endpoint to add a new user to the database
// Returns all users on success
export const addUser = (req, res) => {
    userRepo.create(req.body)
        .then(() => getUsers(req, res))
        .catch(err => handleError.call(res, err));
};

// Endpoint to retrieve a single user by ID
export const getUser = (req, res) => {
    userRepo.getById(req.params.id)
        .then(user => handleSuccess.call(res, user))
        .catch(err => handleError.call(res, err));
};

// Endpoint to update a single user
// Returns all users on success
export const updateUser = (req, res) => {
    userRepo.updateOne(req.params.id, req.body)
        .then(() => getUsers(req, res))
        .catch(err => handleError.call(res, err));
};

// Endpoint to delete a user by ID
// Returns all users on success
export const deleteUser = (req, res) => {
    userRepo.deleteEntity(req.params.id)
        .then(() => getUsers(req, res))
        .catch(err => handleError.call(res, err));
};
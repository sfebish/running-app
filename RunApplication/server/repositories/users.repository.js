import User from '../models/user.model';
import { BaseRepository } from './base.repository';

// Setup the users repository to inherit from the base repo
export class UsersRepository extends BaseRepository {
    constructor() {
        super(User, bodyToUser);
    }
}

// Maps the req.body to a user object to be used by the repository
function bodyToUser(requestBody) {
    const user = {
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
        birthdate: requestBody.birthdate,
        email: requestBody.email
    }

    return user;
}
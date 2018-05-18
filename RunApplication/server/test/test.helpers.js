import customLogger from '../server/customLogger';
import _ from 'lodash';

// repositories to import
import {UsersRepository} from '../repositories/users.repository';

const logger = customLogger.getLogger('TestHelper');

// Object to hold each entity repository used in tests
const entityRepos = {
    usersRepository: new UsersRepository()
}

// Loops through all repositories from above and deletes all entries from the collection
export function clearData() {
    return new Promise((resolve, reject) => {
        const promises = [];

        _.forOwn(entityRepos, (value, key) => promises.push(value.clearCollection()));

        logger.info(`clearing ${promises.length} collections`);

        Promise.all(promises)
            .then(() => resolve(true))
            .catch(err => reject(err));
    });
};

// Creates all prerequisite data to be used in each test
export function stageData() {
    return new Promise((resolve, reject) => {
        const promises = [];
        const user = createUser('test', 'user1', new Date(1980, 1, 1), 'testuser1@test.com');
        promises.push(entityRepos.usersRepository.create(user));

        logger.info(`staging ${promises.length} entities for tets`);
        Promise.all(promises)
            .then(() => resolve(true))
            .catch(err => reject(err));
    });
};

// returns a user object to be saved
function createUser(firstName, lastName, birthdate, email) {
    return {
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate,
        email: email
    };
};
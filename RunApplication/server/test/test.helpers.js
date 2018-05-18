import customLogger from '../server/customLogger';
import _ from 'lodash';

// repositories to import
import { UserRepository } from '../repositories/user.repository';
import { RunRepository} from '../repositories/run.repository';

const logger = customLogger.getLogger('TestHelper');

// Object to hold each entity repository used in tests
const entityRepos = {
    usersRepository: new UserRepository(),
    runRepository: new RunRepository()
}

// Loops through all repositories from above and deletes all entries from the collection
export function clearData() {
    return new Promise((resolve, reject) => {
        const promises = [];

        _.forOwn(entityRepos, (value) => promises.push(value.clearCollection()));

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

        const run = createRun(9, 99999, new Date(), true);
        promises.push(entityRepos.runRepository.create(run));

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

function createRun(distance, time, date, isRace) {
    return { distance, time, date, isRace };
}
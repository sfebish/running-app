import { UserRepository } from '../../repositories/user.repository';

const usersRepo = new UserRepository();
suite('Users Repository Tests', sinon.test(function() {
    suiteSetup(function() {
        // called before this suite is run
    });

    suiteTeardown(function() {
        // called after this suite is run
    });

    setup(function() {
        // called before every test in this suite
    });

    teardown(function() {
        // called after every test in this suite
    });

    // Tests that we can retrieve the user that we created
    // when we staged the test data
    test('retrieve users',
        sinon.test(function() {
            return usersRepo.getAll()
                .then(users => {
                    assert.isAbove(users.length, 0);
                })
                .catch(err => assert.ifError(err));
        }));

    // Tests that a new user can be created
    test('create user',
        sinon.test(function() {
            const user = {
                firstName: 'Joe',
                lastName: 'Smith',
                birthdate: new Date(1960, 1, 3),
                email: 'js@gmail.com'
            }

            return usersRepo.create(user)
                .then(addedUser => {
                    assert.exists(addedUser);
                    const addedUserObj = addedUser.toObject();
                    assert.equal(addedUserObj.lastName, 'Smith');
                })
                .catch(err => assert.ifError(err));
        }));

    // Tests that we can add a user and then update a property of it
    test('update user',
        sinon.test(function() {
            const user = {
                firstName: 'Joe',
                lastName: 'Smith',
                birthdate: new Date(1960, 1, 3),
                email: 'js@gmail.com'
            }

            return usersRepo.create(user)
                .then(addedUser => {
                    assert.exists(addedUser);
                    const addedUserObj = addedUser.toObject();
                    addedUserObj.lastName = 'Schmoe';

                    return usersRepo.updateOne(addedUser._id, addedUserObj)
                        .then(updatedUser => {
                            assert.exists(updatedUser);
                            const updatedUserObj = updatedUser.toObject();

                            assert.equal(updatedUserObj.lastName, 'Schmoe');
                        })
                        .catch(err => assert.ifError(err));
                })
                .catch(err => assert.ifError(err));
        }));

    // Tests that we can add a user and then delete it
    test('delete user',
        sinon.test(function() {
            const user = {
                firstName: 'Joe',
                lastName: 'Smith',
                birthdate: new Date(1960, 1, 3),
                email: 'js@gmail.com'
            }

            return usersRepo.create(user)
                .then(addedUser => {
                    assert.exists(addedUser);

                    return usersRepo.deleteEntity(addedUser._id)
                        .then(() => assert.isOk(true))
                        .catch(err => assert.ifError(err));
                })
                .catch(err => assert.ifError(err));
        }));
}));
import { RunRepository } from '../../repositories/run.repository';

const runRepo = new RunRepository();
suite('Run Repository Tests', sinon.test(function () {
    suiteSetup(function () {
        // called before this suite is run
    });

    suiteTeardown(function () {
        // called after this suite is run
    });

    setup(function () {
        // called before every test in this suite
    });

    teardown(function () {
        // called after every test in this suite
    });

    // Tests that we can retrieve the run that we created
    // when we staged the test data
    test('retrieve runs',
        sinon.test(function () {
            return runRepo.getAll()
                .then(runs => {
                    assert.isAbove(runs.length, 0);
                })
                .catch(err => assert.ifError(err));
        }));

    // Tests that a new run can be created
    test('create run',
        sinon.test(function () {
            const run = {
                distance: 12,
                time: 29292,
                date: new Date(),
                isRace: true
            }

            return runRepo.create(run)
                .then(addedRun => {
                    assert.exists(addedRun);
                    const addedRunObj = addedRun.toObject();
                    assert.equal(addedRunObj.distance, run.distance);
                })
                .catch(err => assert.ifError(err));
        }));

    // Tests that we can add a run and then update a property of it
    test('update run',
        sinon.test(function () {
            const run = {
                distance: 12,
                time: 29292,
                date: new Date(),
                isRace: true
            }

            return runRepo.create(run)
                .then(addedRun => {
                    assert.exists(addedRun);
                    const addedRunObj = addedRun.toObject();
                    addedRunObj.distance = 14;

                    return runRepo.updateOne(addedRun._id, addedRunObj)
                        .then(updatedRun => {
                            assert.exists(updatedRun);
                            const updatedRunObj = updatedRun.toObject();

                            assert.equal(updatedRunObj.distance, addedRunObj.distance);
                        })
                        .catch(err => assert.ifError(err));
                })
                .catch(err => assert.ifError(err));
        }));

    // Tests that we can add a run and then delete it
    test('delete run',
        sinon.test(function () {
            const run = {
                distance: 12,
                time: 29292,
                date: new Date(),
                isRace: true
            }

            return runRepo.create(run)
                .then(addedRun => {
                    assert.exists(addedRun);

                    return runRepo.deleteEntity(addedRun._id)
                        .then(() => assert.isOk(true))
                        .catch(err => assert.ifError(err));
                })
                .catch(err => assert.ifError(err));
        }));
}));
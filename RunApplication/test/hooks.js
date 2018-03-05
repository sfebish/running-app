import * as testHelpers from './test.helpers';

// Global test hook that will be called before every test
// First it clears all test data, then it will stage 
// data that should exist for every test
export function setup() {
    return testHelpers.clearData()
        .then(() => {
            return testHelpers.stageData()
                .then(() => assert.isOk(true))
                .catch(err => assert.ifError(err));
        })
        .catch(err => assert.ifError(err));
};
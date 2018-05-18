import { handleSuccess, handleError } from './express.helpers';
import { RunRepository } from '../repositories/run.repository';

const runRepo = new RunRepository();

// Endpoint to retrieve all runs
export const getRuns = (req, res) => {
    runRepo.getAll()
        .then(runs => handleSuccess.call(res, runs))
        .catch(err => handleError.call(res, err));
};

// Endpoint to add a new run
// Returns all runs
export const addRun = (req, res) => {
    runRepo.create(req.body)
        .then(() => getRuns(req, res))
        .catch(err => handleError.call(res, err));
};

// Endpoint to retrieve a single run by id
export const getRun = (req, res) => {
    runRepo.getById(req.params.id)
        .then(run => handleSuccess.call(res, run))
        .catch(err => handleError.call(res, err));
};

// Endpoint to update a specific run
// returns all runs
export const updateRun = (req, res) => {
    runRepo.updateOne(req.params.id, req.body)
        .then(() => getRun(req, res))
        .catch(err => handleError.call(res, err));
};

// Endpoint to delete a specific run
// Returns all remaining runs
export const deleteRun = (req, res) => {
    runRepo.deleteEntity(req.params.id)
        .then(() => getRun(req, res))
        .catch(err => handleError.call(res, err));
};
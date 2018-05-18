import express from 'express';

// import run service
import * as runService from '../services/run.service';

// get an instance of the express router
const router = express.Router();

// setup routes for getting all and adding runs
router.route('/')
    .get(runService.getRuns)
    .post(runService.addRun);

// setup routes for getting/ updating/ deleting a run
router.route(':id')
    .get(runService.getRun)
    .put(runService.updateRun)
    .delete(runService.deleteRun);

export default router;
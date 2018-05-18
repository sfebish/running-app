import express from 'express';

// import logger service
import * as loggerService from '../services/logs.service';

// get an instance of express router
const router = express.Router();

// setup log routes
router.route('/')
    .post(loggerService.logToServer);

export default router;
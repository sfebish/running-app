import Run from '../models/run.model';
import { BaseRepository } from './base.repository';

export class RunRepository extends BaseRepository {
    constructor() {
        super(Run, bodyToRun);
    }
}

const bodyToRun = body => {
    const run = {
        distance: body.distance,
        time: body.time,
        date: body.date,
        isRace: body.isRace
    }

    return run;
}
// This is the default config class
// All production/ default values will be stored here
// Local overrides should be stored in the config.overrides.js file
// Note - override file will not be pushed to git, so you may need to create it
export class Config {
    constructor() {
        this.databaseName = 'rundb';
        this.databaseServer = 'database'; // database is the name of the docker compose service

    }

    getValue(paramName) {
        return this[paramName];
    }
}

export class ConfigTest extends Config {
    constructor() {
        super();

        this.databaseName = 'rundb_test';
        this.databaseServer = '127.0.0.1';
    }
}
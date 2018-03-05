'use strict';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import SourceMapSupport from 'source-map-support';
import passport from 'passport';
import { Strategy } from 'passport-local';
import User from './models/user.model';
import customLogger from './server/customLogger';

// Create a logger for this file
var logger = customLogger.getLogger('server');
logger.info('Starting Server...');

// Routes
import userRouter from './routes/users';

const app = express();

// allow-cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// configure passpsort model usage
passport.use(new Strategy(User.authenticate()));

// configure serialization of user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const port = process.env.PORT || 8080;

// add source map support
SourceMapSupport.install();

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.end('API Working');
});

app.listen(port, () => console.log('App Server Listening at ', port));

export default app;

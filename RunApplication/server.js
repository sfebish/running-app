'use strict';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import SourceMapSupport from 'source-map-support';
import passport from 'passport';
import { Strategy } from 'passport-local';
import userModel from './models/userModel';

// Routes
import userRouter from './routes/users';

// Creating Express App
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
passport.use(new Strategy(userModel.authenticate()));

// configure serialization of user
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

// set port for node process to use.
const port = process.env.PORT || 8080;

// add source map support
SourceMapSupport.install();

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.end('API Working');
});

app.listen(port, () => console.log('App Server Listening at ', port));

# RunApplication


## Install
npm global prerequisites:
```
npm install -g @angular/cli 
npm install -g concurrently
npm install -g nodemon
```
## Develop
### Both server and client
```
npm run start-dev
```
** Note - If you save changes to a server file, nodemon will restart the node process and if you save changes to a client file, webpack will refresh the browser.

### Just client in dev mode
```
cd app/
npm run start-dev
```
** Note - This will not start the node backend process

### Just the server in dev mode
```
npm start
```
** Note - This will not start the client through webpack

## Unit Tests
### Prior to creating any pull requests, make sure all unit tests pass!!
```
npm run test
```

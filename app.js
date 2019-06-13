const express = require('express');
const path = require('path');

let app = express();
const api = require('./api/v1');
const svc = require('./app.service');

svc.connectToDatabase();

svc.setAppMiddleware(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//svc.apiSetUp(app);
app.use('/api/v1',api);

module.exports = app;
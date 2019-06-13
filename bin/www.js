const app = require('../app')
const http = require('http');
const { serverConfig } = require('../config').appConfig;
const appService = require('../app.service')
const socketApp = require('../server');

// Create HTTP server
let server = http.createServer(app);

// configure socket server
const io = require('socket.io')(server);
socketApp(io);

// Server is listening on provide port
server.listen(serverConfig.port);
server.on('error', appService.onError);
server.on('listening', appService.onListening);
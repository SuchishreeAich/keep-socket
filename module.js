const noteModel = require('./api/v1/notes/notes.entity');
const initializeMongooseConnection = require('./db').createMongoConnection;

module.exports = {
  noteModel,
  initializeMongooseConnection
}
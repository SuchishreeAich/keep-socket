const should = require('chai').should();
const request = require('supertest');

const config = require('./config.test');

const app = require('../app');
const modules = require('../module');
const uuidv1 = require('uuid/v1');

// Mongodb connection
before((done) => {
  // console.log('mongoose connection');
  modules.initializeMongooseConnection().then(() => done());
});

describe('Testing Note Share', () => {
  it('Should share note to users', (done) => {
    //done();
    let note = new modules.noteModel({
      id : uuidv1()
    });

    request(app)
      .post('/api/v1/notes/share/?userName='+config.USERNAME)
      .send(note)
      .expect(201)
      .end((error, response) => {
        //console.log(response);
        response.body.message.should.equal('Shared Successfully', 'Response Message should be correct');
        done();
      });

  });
});

describe('Testing Note Retrieval', () => {
  it('Should fetched note shared to user', (done) => {
    //done();

    request(app)
      .get('/api/v1/notes/share')
      .expect(200)
      .end((error, response) => {
        //console.log(response);
        response.body.message.should.equal('Get all the notes', 'Response Message should be correct');
        done();
      });

  });
});

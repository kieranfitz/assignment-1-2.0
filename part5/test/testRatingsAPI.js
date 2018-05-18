import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; // eslint-disable-line
// UNIT test begin
describe('Ratings API unit test', function() {
  this.timeout(120000); // eslint-disable-line


  // #1 return a collection of json documents
  it('should return collection of JSON documents', function(done) {
    // calling home page api
    supertest(app)
    .get('/api/ratings')
    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.dXNlcjE.FmYria8wq0aFDHnzYWhKQrhF5BkJbFNN1PqNyNQ7V4M')
    .expect('Content-type', /json/)
    .expect(200) // This is the HTTP response
    .end(function(err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
    });
  });

  it('should deny access to ratings', function(done) {
    supertest(app)
    .get('/api/ratings')
    .expect('Content-type', /json/)
    .expect(401) // This is the HTTP response
    .end(function(err, res) {
        // HTTP status should be 401
        res.status.should.equal(401);
        done();
    });
  });
});
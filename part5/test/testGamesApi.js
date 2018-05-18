import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; // eslint-disable-line
// UNIT test begin
describe('Games API unit test', function() {
this.timeout(120000); // eslint-disable-line
// #1 return a collection of json documents
it('should return collection of JSON documents', function(done) {
  // calling home page api
  supertest(app)
  .get('/api/games')
  .expect('Content-type', /json/)
  .expect(200) // This is the HTTP response
  .end(function(err, res) {
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
  });
});

// #2 add a game
it('should add a game', function(done) {
// post to /api/games
supertest(app)
.post('/api/games')
.send({title: 'Game 99', publisher: 'EA'})
.expect('Content-type', /json/)
.expect(201)
.end(function(err, res) {
  res.status.should.equal(201);
  res.body.should.have.property('title');
  res.body.name.should.equal('Game 99');
  done();
});
});

// #3 delete a game
it('should delete game', function(done) {
const superserver = supertest(app);
superserver
.get('/api/games')
.expect('Content-type', /json/)
.expect(200) // This is HTTP response
.end(function(err, res) {
    const id = res.body[0]._id;
    superserver
        .delete('/api/games/'+id)
        .expect('Content-type', /json/)
        .expect(200) // This is HTTP response
        .end(function(err, res) {
          res.status.should.equal(204);
          done();
        });
       }
     );
});

});
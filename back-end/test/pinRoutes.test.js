const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;

chai.use(chaiHttp);

describe('Pins Route', () => {
  // GET /pins
  it('should retrieve all pins', (done) => {
    chai.request(app)
      .get('/api/pins')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
        done();
      });
  });

  // GET /pins/user/:userId
  it('should retrieve all pins for a specific user', (done) => {
    chai.request(app)
      .get('/api/pins/user/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        res.body.forEach(pin => {
          expect(pin.userId).to.equal(123);
        });
        done();
      });
  });

  // GET /pins/:id
  it('should retrieve a pin by its ID', (done) => {
    chai.request(app)
      .get('/api/pins/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
      });
  });

  it('should return 404 if pin ID does not exist', (done) => {
    chai.request(app)
      .get('/api/pins/999')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message', 'Pin not found');
        done();
      });
  });

  // POST /pins
  it('should create a new pin', (done) => {
    const newPin = {
      userId: 789,
      message: 'New test pin',
      location: [40.7419, -73.9893]
    };
    chai.request(app)
      .post('/api/pins')
      .send(newPin)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.userId).to.equal(newPin.userId);
        expect(res.body.message).to.equal(newPin.message);
        expect(res.body.location).to.deep.equal(newPin.location); // use deep equal for array comparison
        done();
      });
  });
  // PUT /pins/:id
  it('should update an existing pin by its ID', (done) => {
    const updatedPin = { message: 'Updated message' };
    chai.request(app)
      .put('/api/pins/1')
      .send(updatedPin)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal(updatedPin.message);
        done();
      });
  });

  it('should return 404 if attempting to update a non-existent pin', (done) => {
    chai.request(app)
      .put('/api/pins/999')
      .send({ message: 'Non-existent pin' })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message', 'Pin not found');
        done();
      });
  });

  // DELETE /pins/:id 
  it('should delete a pin by its ID', (done) => {
    chai.request(app)
      .delete('/api/pins/1')
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  it('should return 404 if attempting to delete a non-existent pin', (done) => {
    chai.request(app)
      .delete('/api/pins/999')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message', 'Pin not found');
        done();
      });
  });

  // GET /pins/latest/:count
  it('should fetch the latest N pins', (done) => {
    chai.request(app)
      .get('/api/pins/latest/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').with.lengthOf(2);
        done();
      });
  });

  it('should return 400 if count parameter is invalid', (done) => {
    chai.request(app)
      .get('/api/pins/latest/notanumber')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error', 'Count parameter must be a positive number');
        done();
      });
  });
});

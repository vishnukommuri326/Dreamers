// test/pinRoutes.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 

chai.use(chaiHttp);
const { expect } = chai;

describe('Pin Routes', () => {
  
  // 1. Test GET all pins
  describe('/GET all pins', () => {
    it('should GET all pins', (done) => {
      chai.request(app)
        .get('/api/pins')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.above(0);
          done();
        });
    });
  });

  // 2. Test GET pin by ID
  describe('/GET pin by ID', () => {
    it('should GET a pin by ID', (done) => {
      chai.request(app)
        .get('/api/pins/1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('id', 1);
          done();
        });
    });

    it('should return 404 if the pin is not found', (done) => {
      chai.request(app)
        .get('/api/pins/999')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property('message', 'Pin not found');
          done();
        });
    });
  });

  // 3. Test POST create a new pin
  describe('/POST create a new pin', () => {
    it('should CREATE a new pin', (done) => {
      const newPin = {
        userId: 789,
        message: 'New pin test',
        location: [40.7128, -74.0060]
      };
      chai.request(app)
        .post('/api/pins')
        .send(newPin)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message', newPin.message);
          expect(res.body).to.have.property('userId', newPin.userId);
          done();
        });
    });
  });
});

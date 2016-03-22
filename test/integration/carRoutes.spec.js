"use strict";
let request = require('supertest');
let should = require('should');
let server = require('../../app');
let util = require('../helpers/util');

describe('Car Routes', () => {
  beforeEach((done) => {
    util.resetDB();
    done();
  });
  describe('GET /api/v1/cars', () => {
    it('Should return an array', (done) => {
      request(server)
        .get('/api/v1/cars')
        .expect(200)
        .expect((res) => {
          res.body.should.be.an.instanceOf(Array);
        })
        .end(done);
    });
    it("should return 5 cars", (done) => {
      request(server)
      .get('/api/v1/cars')
      .expect(200)
      .expect((res) => {
        res.body.length.should.equal(5);
      })
      .end(done);
    })
  });
  describe('POST /api/v1/cars', () => {
    it('Should return 500 with no body', (done) => {
      request(server)
      .post('/api/v1/cars')
      .expect(500)
      .end(done);
    });
    it("Should return 200 with body and the object", (done) => {
        let car = {
          image: 'test image',
          make: 'test make',
          model: 'test model',
          descript: 'test descript',
          year: 2000,
          color: 'test color',
          isNew: true,
          numDoors: 4,
          worth: 'test worth'
        };

        request(server)
        .post('api/v1/cars')
        .send(car)
        .expect(200)
        .expect((res) => {
          should.exist(res.body._id);
          res.body.image.should.equal("test image");
          res.body.make.should.equal("test make");
          res.body.model.should.equal("test model");
          res.body.descript.should.equal("test descript");
          res.body.year.should.equal(2000);
          res.body.color.should.equal("test color");
          res.body.isNew.should.equal(true);
          res.body.numDoors.should.equal(4);
          res.body.worth.should.equal("test worth");
        })
        .end(done);
  })
    })
  });

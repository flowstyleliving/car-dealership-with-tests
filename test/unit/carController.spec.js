'use strict';
let controller = require('../../api/carController');
let http_mocks = require('node-mocks-http');
let should = require('should');
let db = require('../../models/db');
let util = require('../helpers/util');

function buildResponse() {
  return http_mocks.createResponse({
    eventEmitter: require('events').EventEmitter
  });
}

describe('Car Controller', () => {
      describe('getAll()', () => {
        before((done) => {
          util.resetDB();
          done();
        })
        it('Should return an array', (done) => {
          let response = buildResponse();

          let request = http_mocks.createRequest({
            method: 'GET',
            url: '/api/v1/cars'
          })

          response.on('end', () => {
            JSON.parse(response._getData()).should.be.an.instanceOf(Array);
            done();
          })

          controller.getAll(request, response, () => {});
        });
        it('Should return 5 cars in the array', (done) => {
          let response = buildResponse();

          let request = http_mocks.createRequest({
            method: 'GET',
            url: '/api/v1/cars'
          });
          response.on('end', () => {
            JSON.parse(response._getData()).length.should.equal(5);
            done();
          })
          controller.getAll(request, response, () => {});
        });
      });
      describe('create()', () => {
        before((done) => {
          util.resetDB();
          done();
        });
        it('Should call next function iwth an error, if no body', (done) => {
          let response = buildResponse();

          let request = http_mocks.createRequest({
            method: 'POST',
            url: '/api/v1/cars'
          });

          response.on('end', () => {
            throw new Error('Did not call the next function');
          })

          let next = function(ex) {
            should.exist(ex);
            done();
          };
          controller.create(request, response, next);
        });
        it('Should return a 200 and the object back', (done) => {
          let response = buildResponse();

          let request = http_mocks.createRequest({
            method: 'POST',
            url: 'api/v1/cars',
            body: {
              image: 'test image',
              make: 'test make',
              model: 'test model',
              descript: 'test descript',
              year: 2000,
              color: 'test color',
              isNew: true,
              numDoors: 4,
              worth: 'test worth'
            }
          });

          let next = function(ex) {
            throw new Error(ex);
          };

          response.on('end', () => {
            let data = JSON.parse(response._getData());
            should.exist(data._id);
            response.statusCode.should.equal(200);
            data.image.should.equal('test image');
            data.make.should.equal('test make');
            data.model.should.equal('test model');
            data.descript.should.equal('test descript');
            data.year.should.equal(2000);
            data.color.should.equal('test color');
            data.isNew.should.equal(true);
            data.numDoors.should.equal(4);
            data.worth.should.equal('test worth');
            done();
          });

          controller.create(request, response, next);
        });

        it('Should have added the car into the cars db', (done) => {
          db.default.cars.length.should.equal(6);
          db.default.cars[5].image.should.equal('test image');
          db.default.cars[5].make.should.equal('test make');
          db.default.cars[5].model.should.equal('test model');
          db.default.cars[5].descript.should.equal('test descript');
          db.default.cars[5].year.should.equal(2000);
          db.default.cars[5].color.should.equal('test color');
          db.default.cars[5].isNew.should.equal(true);
          db.default.cars[5].numDoors.should.equal(4);
          db.default.cars[5].worth.should.equal('test worth');
          done();
        })
      });
      describe('Remove', (done) => {
        before((done) => {
          util.resetDB();
          done();
        })
        it('Should have removed last car in cars array', () => {
          let response = buildResponse();

          let request = http_mocks.createRequest({
            method: 'DELETE',
            url: '/api/v1/cars/5'
          });

          response.on('end', () => {
            db.default.cars.length.should.equal(5);
            done();
          });
        });
      });
    });

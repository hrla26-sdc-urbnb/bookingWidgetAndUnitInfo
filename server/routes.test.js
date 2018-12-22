const request = require('supertest');
const app = require('./app');


// lets test our unitInfo route...

test('GET to api/units/unitId should send a response', (done) => {
  request(app).get('/api/units/11111').then((response) => {
    expect(response.statusCode).toBe(200);
    done();
  });
});

test('GET to api/units/unitId response should be json object', (done) => {
  request(app).get('/api/units/11111').then((response) => {
    expect(typeof response.text).toBe('string');
    done();
  });
});

test('GET to api/units/unitId repsonse should have 3 properties', (done) => {
  request(app).get('/api/units/11111').then((response) => {
    expect(JSON.parse(response.text).ownerData).toBeDefined();
    expect(JSON.parse(response.text).unitData).toBeDefined();
    expect(JSON.parse(response.text).amenities).toBeDefined();
    done();
  });
});


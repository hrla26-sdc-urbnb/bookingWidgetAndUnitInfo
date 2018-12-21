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


// lets test our amenities route...

test('GET to api/units/unitId/amenities repsonse should be an array', (done) => {
  request(app).get('/api/units/11111/amenities').then((response) => {
    expect(JSON.parse(response.text).length > 0).toBe(true);
    done();
  });
});

test('GET to api/units/unitId/amenities repsonse should have a name property', (done) => {
  request(app).get('/api/units/11111/amenities').then((response) => {
    expect(JSON.parse(response.text)[0].name).toBeDefined();
    done();
  });
});

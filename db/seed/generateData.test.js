const { 
  generateOwnersData,
  generateUnitsData,
  generateUnitsAmenitiesJoinData,
} = require('./generateData');

test('creates an array of owners', () => {
  expect(generateOwnersData().length).toBe(100);
});

test('creates an array of units', () => {
  expect(generateUnitsData().length).toBe(100);
});

test('should have objects with properties unitId and amenityId', () => {
  expect(generateUnitsAmenitiesJoinData()[0].unitId).toBeDefined();
  expect(generateUnitsAmenitiesJoinData()[0].amenityId).toBeDefined();
});

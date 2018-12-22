const { 
  generateOwnersData,
  generateUnitsData,
} = require('./generateData');

test('creates an array of owners', () => {
  expect(generateOwnersData().length).toBe(100);
});

test('creates an array of units', () => {
  expect(generateUnitsData().length).toBe(100);
});

const {
  generateOwnersData,
  generateUnitsData,
} = require('./generateData');

const {
  Owner,
  Unit,
} = require('../index');

const sampleOwners = generateOwnersData();
const sampleUnits = generateUnitsData();

Owner.insertMany(sampleOwners);
Unit.insertMany(sampleUnits);

const {
  generateOwnersData,
  generateUnitsData,
  amenities,
  generateUnitsAmenitiesJoinData,
} = require('./generateData');

const {
  Owner,
  Unit,
  Amenity,
  UnitsAmenities,
} = require('../index');

const sampleOwners = generateOwnersData();
const sampleUnits = generateUnitsData();
const sampleUnitsAmenities = generateUnitsAmenitiesJoinData();

Owner.insertMany(sampleOwners);
Unit.insertMany(sampleUnits);
Amenity.insertMany(amenities);
UnitsAmenities.insertMany(sampleUnitsAmenities);

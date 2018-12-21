const {
  Owner,
  Unit,
  Amenity,
  UnitsAmenities,
} = require('../db/index');

module.exports = {
  // this supplies data for the owner of the unit

  readOwner: (id, callback) => {
    Owner.find({ id }, (err, results) => {
      if (err) {
        console.log('error reading owner from db -->', err);
      } else {
        callback(results);
      }
    });
  },

  // this supplies data for the unit itself

  readUnit: (id, callback) => {
    Unit.find({ id }, (err, results) => {
      if (err) {
        console.log('error reading unit from db -->', err);
      } else {
        callback(results);
      }
    });
  },

  // this supplies the list of possible amenities

  readAmenities: (callback) => {
    Amenity.find({}, (err, results) => {
      if (err) {
        console.log('error reading amenities from db -->', err);
      } else {
        callback(results);
      }
    });
  },

  // this supplies the list of amenities the unit has

  readUnitsAmenities: (unitId, callback) => {
    UnitsAmenities.find({ unitId }, (err, results) => {
      if (err) {
        console.log('error reading unitsAmenities from db -->', err);
      } else {
        callback(results);
      }
    });
  },
};

const {
  Owner,
  Unit,
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
};

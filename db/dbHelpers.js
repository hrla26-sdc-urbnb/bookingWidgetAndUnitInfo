const db = require('./index.js');

module.exports = {
  readUnit: (unitId, callback) => {
    db.query(`
      SELECT *
      FROM units
      WHERE id = ${unitId};
    `, callback);
  },
  readOwner: (ownerId, callback) => {
    db.query(`
      SELECT *
      FROM owners
      WHERE id = ${ownerId}
    `, callback);
  },
};

// const {
//   Owner,
//   Unit,
// } = require('../db/index');

// module.exports = {
//   readOwner: (id, callback) => { // this supplies data for the owner of the unit
//     Owner.find({ id }, (err, results) => {
//       if (err) {
//         console.log('error reading owner from db -->', err);
//       } else {
//         callback(results);
//       }
//     });
//   },
//   readUnit: (id, callback) => { // this supplies data for the unit itself
//     Unit.find({ id }, (err, results) => {
//       if (err) {
//         console.log('error reading unit from db -->', err);
//       } else {
//         callback(results);
//       }
//     });
//   },
// };

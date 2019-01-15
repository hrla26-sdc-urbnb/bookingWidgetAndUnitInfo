const db = require('../db/dbHelpers');

module.exports = {
  getUnitInfo: (req, res) => {
    const { unitId } = req.params;

    db.readUnit(unitId, (err, unitData) => {
      if (err) { console.error(err); } else {
        db.readOwner(unitData.rows[0].owner_id, (err, ownerData) => {
          if (err) { console.error(err); } else {
            res.status(200).send({
              ownerData: ownerData.rows,
              unitData: unitData.rows,
            });
          }
        });
      }
    });
  },
};

// module.exports = {
//   getUnitInfo: (req, res) => {
//     const { unitId } = req.params;
//     db.readUnit(unitId, (unitData) => {
//       db.readOwner(unitData[0].owner_id, (ownerData) => {
//         res.status(200).send({ ownerData, unitData });
//       });
//     });
//   },
// };

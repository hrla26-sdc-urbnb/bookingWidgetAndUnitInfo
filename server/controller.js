const db = require('../db/dbHelpers');

module.exports = {
  getUnitInfo: (req, res) => {
    const { unitId } = req.params;

    db.readUnit(unitId, (err, unitData) => {
      if (err) { console.error(err); } else {
        res.status(200).send({ unitData: unitData.rows });

        // db.readOwner(unitData.rows[0].owner_id, (err, ownerData) => {
        //   if (err) { console.error(err); } else {
        //     res.status(200).send({
        //       ownerData: ownerData.rows,
        //       unitData: unitData.rows,
        //     });
        //   }
        // });

      }
    });
  },
  addUnit: (req, res) => {
    const { newUnit } = req.body;
    db.insertUnit(newUnit, (err) => {
      if (err) { console.error(err); } else {
        res.send('Unit successfully added');
      }
    });
  },
  updateUnit: (req, res) => {
    const { updatedUnit } = req.body;
    db.updateUnit(updatedUnit, (err) => {
      if (err) { console.error(err); } else {
        res.send('Unit successfully updated');
      }
    });
  },
  deleteUnit: (req, res) => {
    const { unitId } = req.params;
    db.deleteUnit(unitId, (err) => {
      if (err) { console.error(err); } else {
        res.send('unit deleted');
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

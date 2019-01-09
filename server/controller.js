const db = require('../db/dbHelpers');

module.exports = {
  getUnitInfo: (req, res) => {
    const { unitId } = req.params;
    db.readUnit(unitId, (unitData) => {
      db.readOwner(unitData[0].owner_id, (ownerData) => {
        res.status(200).send({ ownerData, unitData });
      });
    });
  },
};

const db = require('../db/dbHelpers');

module.exports = {

  getUnitInfo: (req, res) => {
    const { unitId } = req.params;
    db.readUnit(unitId, (unitData) => {
      db.readOwner(unitData[0].owner_id, (ownerData) => {
        db.readUnitsAmenities(unitId, (amenities) => {
          res.status(200).send({ ownerData, unitData, amenities });
        });
      });
    });
  },

  getAmenities: (req, res) => {
    db.readAmenities((amenities) => {
      res.status(200).send(amenities);
    });
  },
};

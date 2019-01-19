const db = require('../db/dbHelpers');

module.exports = {
  getUnitInfo: (req, res) => {
    const { unitId } = req.params;

    db.readUnit(unitId)
      .then((unitData) => {
        db.readOwner(unitData.rows[0].owner_id)
          .then((ownerData) => {
            res.status(200).send({
              ownerData: ownerData.rows,
              unitData: unitData.rows,
            });
          })
          .catch((err) => { console.error(err); });
      })
      .catch((err) => { console.error(err); });
  },
  addUnit: (req, res) => {
    const { newUnit } = req.body;
    return db.insertUnit(newUnit)
      .then((response) => {
        res.status(201).send(response);
      })
      .catch((err) => {
        console.error(err);
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
        res.send('Unit successfully deleted');
      }
    });
  },
};

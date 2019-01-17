const router = require('express').Router();
const {
  getUnitInfo,
  addUnit,
  updateUnit,
  deleteUnit,
} = require('./controller');

router.get('/units/:unitId/', getUnitInfo);
router.post('/units/', addUnit);
router.put('/units/', updateUnit);
router.delete('/units/:unitId/', deleteUnit);

module.exports = router;

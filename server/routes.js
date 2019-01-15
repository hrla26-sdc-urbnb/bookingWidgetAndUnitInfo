const router = require('express').Router();
const {
  getUnitInfo,
  addUnit,
  updateUnit,
  deleteUnit,
} = require('./controller');

router.get('/:unitId/', getUnitInfo);
router.post('/', addUnit);
router.put('/', updateUnit);
router.delete('/:unitId/', deleteUnit); // works

module.exports = router;

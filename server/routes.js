const router = require('express').Router();
const controller = require('./controller');

router.get('/:unitId/', controller.getUnitInfo);
router.get('/:unitId/amenities/', controller.getAmenities);

module.exports = router;

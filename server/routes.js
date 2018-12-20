const router = require('express').Router();
const controller = require('./controller');

router.get('/:unitId', controller.getUnitInfo);
router.get('/:unitId/owner', controller.getOwnerInfo);

module.exports = router;

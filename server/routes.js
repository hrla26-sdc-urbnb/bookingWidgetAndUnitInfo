const router = require('express').Router();
const controller = require('./controller');

router.get('/:unitId/', controller.getUnitInfo);


module.exports = router;

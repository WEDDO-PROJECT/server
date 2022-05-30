const controller =require('../controllers/ServiceProvider.controller')
const router = require('express').Router();

router.post('/AuthWithPhone',controller.AuthWithPhone);
router.post('/Register',controller.Register)
router.get('/all',controller.selectAll)
module.exports = router;
const controller =require('../controllers/ServiceProvider.controller')
const router = require('express').Router();

router.post('/AuthWithPhone',controller.AuthWithPhone);
router.post('/Register',controller.Register)
router.get('/all',controller.selectAll)
router.post('/login',controller.login)
module.exports = router;
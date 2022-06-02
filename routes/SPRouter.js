const controller =require('../controllers/ServiceProvider.controller')
const controllerSalle =require('../controllers/SalleController.js')
const router = require('express').Router();

router.post('/AuthWithPhone',controller.AuthWithPhone);
router.post('/Register',controller.Register)
router.post('/addSalle',controllerSalle.AddSalle)
router.get('/SelectSalle',controllerSalle.SelectSalle)
// router.get('/all',controller.selectAll)
router.post('/login',controller.login)
// router.get('/AllServiceProvider',controller.selectAllSPRoom)
router.get('/getSpInfo/:id',controller.getSpInfo)

module.exports = router;
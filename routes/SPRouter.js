const controller =require('../controllers/ServiceProvider.controller')
const controllerSalle =require('../controllers/SalleController.js')
const router = require('express').Router();

router.post('/AuthWithPhone',controller.AuthWithPhone);
router.post('/Register',controller.Register)
router.post('/login',controller.login)
router.post('/addSalle',controllerSalle.AddSalle)
router.get('/SelectSalle',controllerSalle.SelectSalle)
router.get('/all',controller.selectAll)
router.get('/AllServiceProvider',controller.selectAllSPRoom)
router.get('/info/:id',controller.selectOne)
module.exports = router;
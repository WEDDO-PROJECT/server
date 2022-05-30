const controller =require('../controllers/ServiceProvider.controller')
const controllerSalle =require('../controllers/SalleController.js')
const router = require('express').Router();

router.post('/AuthWithPhone',controller.AuthWithPhone);
router.post('/Register',controller.Register)
router.post('/addSalle',controllerSalle.AddSalle)
router.get('/SelectSalle',controllerSalle.SelectSalle)
module.exports = router;
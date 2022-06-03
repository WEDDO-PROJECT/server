<<<<<<< HEAD
const controller =require('../controllers/ServiceProvider.controller.js')
=======
const controller =require('../controllers/ServiceProvider.controller')

const controllerImage =require('../controllers/ImageController')
>>>>>>> a8579b5e1a6495217180b89445c3f2bc1fd2a1ee
const controllerSalle =require('../controllers/SalleController.js')
const router = require('express').Router();

router.post('/AuthWithPhone',controller.AuthWithPhone);
router.post('/Register',controller.Register)
router.post('/login',controller.login)
router.post('/addSalle',controllerSalle.AddSalle)
router.post('/AddImage',controllerImage.AddImage)
router.get('/getimages/:id',controllerImage.selectImage)
router.get('/SelectSalle',controllerSalle.SelectSalle)
router.get('/all',controller.selectAll)
router.get('/AllServiceProvider',controller.selectAllSPRoom)
module.exports = router;
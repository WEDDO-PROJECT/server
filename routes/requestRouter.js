const controller =require('../controllers/requestController')
const router = require('express').Router();


router.post('/create',controller.createRequest)
router.post('/send',controller.getAllByIdSp)
router.get('/all',controller.getAll)
router.get('/getByIdUser/:id',controller.getRequestByIdUser)
router.post('/delete',controller.deleteRequest)
router.post('/update',controller.updateConfime)

module.exports = router;
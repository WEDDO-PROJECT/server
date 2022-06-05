const controller =require('../controllers/requestController')
const router = require('express').Router();


router.post('/create',controller.createRequest)
router.get('/all',controller.getAll)
router.get('/getByIdUser/:id',controller.getRequestByIdUser)
router.post('/delete',controller.deleteRequest)

module.exports = router;
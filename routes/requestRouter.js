const controller =require('../controllers/requestController')
const router = require('express').Router();


router.post('/create',controller.createRequest)
router.get('/getByIdUser/:id',controller.getRequestByIdUser)

module.exports = router;
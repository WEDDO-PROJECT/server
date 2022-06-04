const controller =require('../controllers/ratingController')
const router = require('express').Router();


router.post('/create',controller.createRating)
// router.get('/getByIdUser/:id',controller.getRequestByIdUser)
// router.post('/delete',controller.deleteRequest)

module.exports = router;
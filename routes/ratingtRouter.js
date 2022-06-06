const controller =require('../controllers/ratingController')
const router = require('express').Router();


router.post('/create',controller.createRating)
router.get('/getAll',controller.getAllRating)


module.exports = router;
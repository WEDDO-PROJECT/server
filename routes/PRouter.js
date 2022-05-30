const controller=require('../controllers/spProfile.js')
const router=require('express').Router()

router.get('/getSpInfo',controller.getSpInfo)
module.exports=router;
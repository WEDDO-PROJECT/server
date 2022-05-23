const controller =require('../controllers/ServiceProvider.controller')
const router = require('express').Router();

router.post('/AuthWithPhone',controller.AuthWithPhone);

module.exports = router;
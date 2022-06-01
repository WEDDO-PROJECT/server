const controller =require('../controllers/user.controller')
const router = require('express').Router();

router.post('/login',controller.SignIn);
router.post('/signup',controller.Register);

module.exports = router;
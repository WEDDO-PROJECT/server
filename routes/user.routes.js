const controller =require('../controllers/user.controller')
const router = require('express').Router();

router.post('/login',controller.userSignIn);
router.post('/signup',controller.userSignUp);

module.exports = router;
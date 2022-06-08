const controller =require('../controllers/user.controller')
const router = require('express').Router();

router.post('/login',controller.login);
router.post('/signup',controller.Register);
router.post('/oneUser',controller.oneUser);

module.exports = router;
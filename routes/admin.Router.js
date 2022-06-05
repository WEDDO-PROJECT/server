const router = require('express').Router();
const adminController = require("../controllers/admin.controllers");
router.post("/signin", adminController.adminSignIn)
router.get("/dashboard", adminController.selectAllsp)
// router.post("/signup", adminController.adminSignUp)


module.exports = router;
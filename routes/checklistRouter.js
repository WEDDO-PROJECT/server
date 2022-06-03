const router = require('express').Router();
const checklistController = require("../controllers/checklistController");

router.post("/addinChecklist", checklistController.createTask)
router.post("/selectTasks", checklistController.selectTasksByIdUser)
router.delete("/deleteTask/:id",checklistController.deleteTask)

module.exports=router;
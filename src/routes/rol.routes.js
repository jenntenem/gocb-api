const { Router } = require("express");
const router = Router();

const rolController = require("../controllers/rol.controller.js");

router.get("/", rolController.getRols);
router.post("/", rolController.createRol);
router.get("/:id", rolController.getRol);
router.put("/:id", rolController.editRol);
router.delete("/:id", rolController.deleteRol);

module.exports = router;

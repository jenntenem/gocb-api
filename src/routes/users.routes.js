const { Router } = require("express");
const router = Router();

const userController = require("../controllers/users.controller.js");

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUser);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;

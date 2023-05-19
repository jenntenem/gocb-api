const { Router } = require("express");
const router = Router();

const clientsController = require("../controllers/clients.controller.js");

router.get("/", clientsController.getClients);
router.post("/", clientsController.createClient);
router.get("/:id", clientsController.getClient);
router.put("/:id", clientsController.editClient);
router.delete("/:id", clientsController.deleteClient);

module.exports = router;

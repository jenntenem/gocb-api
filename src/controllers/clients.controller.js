const Client = require("../models/client");
const userController = require("./users.controller");

const clientController = {};

clientController.getClients = async (req, res, next) => {
  const clients = await Client.find();
  res.json({
    codigo: 200,
    error: false,
    datos: clients,
    message: "Clients Found",
  });
};

clientController.createClient = async (req, res, next) => {
  const data = req.body;
  const client = new Client({ ...data });
  await client.save();
  res.json({
    codigo: 201,
    error: false,
    datos: client,
    message: "Client created",
  });
};

clientController.getClient = async (req, res, next) => {
  const { id } = req.params;
  const client = await Client.findById(id);
  res.json({
    codigo: 200,
    error: false,
    datos: client,
    message: "Client Found",
  });
};

clientController.editClient = async (req, res, next) => {
  const { id } = req.params;
  await Client.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  const client = await Client.findById(id);

  res.json({
    codigo: 200,
    error: false,
    datos: client,
    message: "Client Updated",
  });
};

clientController.deleteClient = async (req, res, next) => {
  const { id } = req.params;
  await Client.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({
    codigo: 200,
    error: false,
    datos: [],
    message: "Client Deleted",
  });
};

module.exports = clientController;

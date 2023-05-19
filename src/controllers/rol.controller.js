const Rol = require("../models/rol");

const rolController = {};

rolController.getRols = async (req, res, next) => {
  const rols = await Rol.find();
  res.json({
    codigo: 200,
    error: false,
    datos: rols,
    message: "Rols Found",
  });
};
rolController.createRol = async (req, res, next) => {
  const data = req.body;

  const rol = new Rol({ ...data });
  await rol.save();
  res.json({
    codigo: 201,
    error: false,
    datos: rol,
    message: "Rol created",
  });
};
rolController.getRol = async (req, res, next) => {
  const { id } = req.params;
  const rol = await Rol.findById(id);
  res.json({
    codigo: 200,
    error: false,
    datos: rol,
    message: "Rol Found",
  });
};

rolController.editRol = async (req, res, next) => {
  const { id } = req.params;
  await Rol.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  const rol = await Rol.findById(id);

  res.json({
    codigo: 200,
    error: false,
    datos: rol,
    message: "Rol Updated",
  });
};

rolController.deleteRol = async (req, res, next) => {
  const { id } = req.params;
  await Rol.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({
    codigo: 200,
    error: false,
    datos: [],
    message: "Rol Deleted",
  });
};

module.exports = rolController;
